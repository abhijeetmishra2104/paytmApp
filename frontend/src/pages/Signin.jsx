import axios, { all } from "axios";
import { Alternative } from "../components/Alternative";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Signin(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const Login = async ()=> {
        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
            username: username,
            password: password,
        })
        if(response.data){
            
            navigate("/dashboard");
            alert("Logged in successfully");
        }
        else{
            alert("Invalid credentials");
            
        }
    }
    
    return <div className="bg-[#134B70] flex h-screen justify-center items-center ">
    <div className=" rounded-lg flex-col shadow-lg bg-[#201E43] w-80 h-96 flex justify-around">
        <Heading label={"Sign In"}/>
        <SubHeading whatToDo={"credentials to access your account"}/>
        <Input onChange={(e)=> {
            setUsername(e.target.value)
        }} data={"username"}/>
        <Input type="password" onChange={(e)=> {
            setPassword(e.target.value)
        }} data={"password"}/>
        <div className="pl-4"><button  onClick={Login} className="bg-[#201E43] hover:bg-[#508C9B] text-[#EEEEEE] font-bold py-2 px-4 border border rounded w-72">
      Login 
    </button></div>
        <Alternative accountState={"Don't"} action={"Sign Up"} pageToDirect={"/signup"}/>
    </div>
    </div>
}