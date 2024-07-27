import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { User } from "../components/Users";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { SubHeading } from "../components/SubHeading";



export function SendMoney(){
    const navigate = useNavigate();
    const [amount, setAmount] = useState(0);
    const[ searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    return <div className="flex h-screen justify-center items-center bg-[#134B70]">
            <div className="rounded-lg flex-col shadow-lg bg-[#201E43] w-80 h-96 flex justify-around">
                <div><Heading label={"Send Money"} /></div>
                <div className="flex flex-col justify-around">
                <div className="flex">
                    <div className="flex pl-10">
                        <div className="rounded-full bg-[#EEEEEE] h-12 w-12 flex justify-center item-center">
                            <div className="flex flex-col justify-center h-full text-xl text-[#021526]">{name[0].toUpperCase()}</div>
                        </div>
                    </div>
                <div className="flex flex-col justify-center h-ful text-[#EEEEEE] pl-4">{name}</div>
                </div>
                <div className="flex flex-col pt-4">
                    <div className="flex justify-center">
                        <input type="number" onChange={(e)=> {
                            setAmount(e.target.value)
                        }} className=" peer w-72 h-full bg-transparent text-[#EEEEEE] font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900" placeholder="Enter Amount (INR)"></input>
                    </div>
                    <div className="pt-4"><Button onClick = {async ()=>{
                        await axios.post("http://localhost:3000/api/v1/account/transfer",{
                            to: id,
                            amount
                        },{
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                        alert("Transaction Successfull");
                        navigate("/dashboard");
                    }} label={"Initiate Payment"} /></div>
                </div>
                </div>
            </div>
            </div>
}