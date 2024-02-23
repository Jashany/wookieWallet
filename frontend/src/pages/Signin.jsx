import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
// ... other imports ...

export const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

   
    return (
        <div className="bg-slate-300 h-screen flex justify-center login">
            <div className="flex  w-full flex-col justify-center inele">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                        <InputBox placeholder="Jashansingh3131@gmail.com" label={"Email"} value={email} onChange={e => setEmail(e.target.value)} />
                        <InputBox placeholder="123456" label={"Password"} value={password} onChange={e => setPassword(e.target.value)} />
                        <div className="pt-4">
                            <Button label={"Sign in"} type="submit" onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
              username : email,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} />
                        </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    );
};