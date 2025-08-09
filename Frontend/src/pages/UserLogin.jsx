import { useState } from "react";
import { Link } from "react-router-dom";



const UserLogin = () => {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        
        setUserData({
            email:email,
            password:password
        })
        


        setEmail("");
        setPassword("");
    };

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16 mb-10" src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
                <form onSubmit={(e)=>{submitHandler(e)}}>
                    <h3 className="text-lg font-medium mb-2">What's your email ?</h3>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" required type="email" placeholder="email@example.com" />
                    <h3 className="text-lg  font-medium mb-2">Enter your password</h3>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" required type="password" placeholder="password" />

                    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base cursor-pointer">Login</button>
                </form>
                <p className="text-center">Create an user account? <Link to='/signup' className="text-blue-600 ">click here</Link></p>

            </div>

            <div>
                <Link to='/captain-login' className="bg-[#10b461] text-white flex items-center justify-center mb-5 font-semibold mb-7  rounded px-4 py-2  w-full text-lg placeholder:text-base cursor-pointer">Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin
