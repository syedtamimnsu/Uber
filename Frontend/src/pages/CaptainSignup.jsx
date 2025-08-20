import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";





const CaptainSignup = () => {
    
        const navigate = useNavigate();

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [vehicleColor, setVehicleColor] = useState("");
        const [vehicleCapacity, setVehicleCapacity] = useState("");
        const [vehiclePlate, setVehiclePlate] = useState("");
        const [vehicleType, setVehicleType] = useState("");






        //Captain signup
        const {captain, setCaptain} = useContext(CaptainDataContext);

        // Handle form submission
        const submitHandler = async (e) => {
            e.preventDefault();


            const captainData = {
                fullname: {
                    firstname: firstName,
                    lastname: lastName
                },
                email: email,
                password: password,
                vehicle: {
                    color: vehicleColor,
                    capacity: Number(vehicleCapacity),
                    plate: vehiclePlate,
                    vehicleType: vehicleType
                }
            };
            

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
            
            
            if (response.status === 201) {
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            }
            console.log(response.data);

            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setVehicleColor("");
            setVehicleCapacity("");
            setVehiclePlate("");
            setVehicleType("");
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


                    <h3 className="text-lg font-medium mb-2">Enter your email</h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base" required type="email" placeholder="email@example.com" />
                    <h3 className="text-lg  font-medium mb-2">Enter your password</h3>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base" required type="password" placeholder="password" />
                    <h3 className="text-lg font-medium mb-2">Enter vehicle color</h3>
                    <input value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base" required type="text" placeholder="vehicle color" />
                    <h3 className="text-lg font-medium mb-2">Enter vehicle plate</h3>
                    <input value={vehiclePlate} onChange={(e) => setVehiclePlate(e.target.value)} className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base" required type="text" placeholder="vehicle plate" />
                    <h3 className="text-lg font-medium mb-2">Enter vehicle capacity</h3>
                    <input value={vehicleCapacity} onChange={(e) => setVehicleCapacity(e.target.value)} className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base" required type="number" placeholder="vehicle capacity" />
                    <h3 className="text-lg font-medium mb-2">Enter vehicle type</h3>
                    <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base" required>
                        <option value="" disabled>Select vehicle type</option>
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                        <option value="truck">Truck</option>
                    </select>

                    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base cursor-pointer">Captain Register</button>
                </form>
                <p className="text-center">Already have an account? <Link to='/captain-login' className="text-blue-600 ">Login here</Link></p>

            </div>

            <div>
                <p className="text-[10px]  leading-tight">This site is protected by reCAPTCHA and the Google <span onClick={() => window.open("https://policies.google.com/privacy", "_blank")} className="text-blue-600 font-bold underline">Privacy Policy</span> and <span onClick={() => window.open("https://policies.google.com/terms", "_blank")} className="text-blue-600 font-bold underline">Terms of Service</span> apply.</p>
            </div>
        </div>
  )
}

export default CaptainSignup
