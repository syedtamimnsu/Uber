import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div>
        <div className="bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1737083053903-b7c9a38fc496?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHx0cmFmZmljJTIwbGlnaHR8ZW58MHx8MHx8fDA%3D)] h-screen flex flex-col pt-8  justify-between  w-full">
            {/* <img className="w-16 ml-8" src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" /> */}
            <h1 className="w-16 ml-8 text-3xl font-bold text-[#FFCCE5]">Uber</h1>
            <div className="bg-white pb-7 py-4 px-4">
                <h2 className="text-3xl font-bold justify-center ml-5">Get Started With Uber</h2>
                <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Login an account</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Home
