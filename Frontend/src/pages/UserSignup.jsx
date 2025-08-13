import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import userContext from "../context/userContext";
import { UserDataContext } from "../context/userContext";





const UserSignup = () => {



    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState('')



    const navigate = useNavigate();

const { user, setUser } = useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        // Handle form submission

        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

        if(response.status === 201) {
            const data = response.data;

            setUser(data.user)
            localStorage.setItem('token', data.token);

            navigate('/Home');
        }


        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }


    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16 mb-10" src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
                <form onSubmit={(e)=>{submitHandler(e)}}>
                    <h3 className="text-lg font-medium mb-2">Enter your full name</h3>
                    <div className="flex gap-4 mb-6">
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-[#eeeeee]  rounded w-1/2 px-4 py-2 border  text-lg placeholder:text-base" required type="text" placeholder="first name" />
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-[#eeeeee]  rounded w-1/2 px-4 py-2 border  text-lg placeholder:text-base" required type="text" placeholder="last name" />
                    </div>


                    <h3 className="text-lg font-medium mb-2">Enter your email ?</h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base" required type="email" placeholder="email@example.com" />
                    <h3 className="text-lg  font-medium mb-2">Enter your password</h3>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base" required type="password" placeholder="password" />

                    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base cursor-pointer">User Register</button>
                </form>
                <p className="text-center">Already have an account? <Link to='/login' className="text-blue-600 ">Login here</Link></p>

            </div>

            <div>
                <p className="text-[10px]  leading-tight">This site is protected by reCAPTCHA and the Google <span onClick={() => window.open("https://policies.google.com/privacy", "_blank")} className="text-blue-600 font-bold underline">Privacy Policy</span> and <span onClick={() => window.open("https://policies.google.com/terms", "_blank")} className="text-blue-600 font-bold underline">Terms of Service</span> apply.</p>
            </div>
        </div>
    )
}

export default UserSignup
