import { useState } from "react";
import { Alternative } from "../components/Alternative";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
        firstName,
        lastName,
        username,
        password,
      });
      
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        console.log("Token saved to local storage");
        setFirstname("");
    setLastname('');
    setUsername("");
    setPassword("");
    navigate("/dashboard")
      } else {
        console.error("No token received in response");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
    
  };

  return (
    <div className="bg-[#134B70] flex h-screen justify-center items-center">
      <div className="rounded-lg flex-col shadow-lg bg-[#201E43] w-80 h-96 flex justify-around">
        <Heading label={"Sign Up"} />
        <SubHeading whatToDo={"information to create an account"} />
        <Input
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          data={"first name"}
        />
        <Input
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          data={"last name"}
        />
        <Input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          data={"username"}
        />
        <Input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          data={"password"}
        />
        <Button onClick={handleSignup} label={"Sign Up"} />
        <Alternative accountState={"Already"} action={"Login"} pageToDirect={"/signin"} />
      </div>
    </div>
  );
}
