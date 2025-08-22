import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from "../components/LocationSearchPanel.jsx";

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  // after click input field screen change to full
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);


  const submitHandler = (e) =>{
    e.preventDefault();

  }

  // use gsap for animation for pannel change into full screen
  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '75%',
        duration: 0.5,
        ease: 'power2.inOut',
        padding: 24
        // opacity: 1
      });
      gsap.to(panelCloseRef.current,{
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 0.5,
        ease: 'power2.inOut',
        // opacity: 0
      });
      gsap.to(panelCloseRef.current,{
        opacity: 0
      })
    }
  }, [panelOpen]);




  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-16 absolute top-5 left-" src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
      
      
      <div className="h-screen w-screen">
          <img className="object-cover h-full w-full" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>


      <div className=" flex flex-col justify-end  h-screen absolute top-0 w-full ">
        <div className="h-[25%] p-6 bg-white relative">
          <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}} className="absolute opacity-0 top-3 right-3 text-2xl">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e)=>{submitHandler(e)}}>
            
            <div className="line absolute h-16 top-[45%] left-10 w-1  bg-gray-600 rounded-full flex flex-col"></div>
            <input onClick={()=>{setPanelOpen(true)}} value={pickup} onChange={(e)=>{setPickup(e.target.value)}} className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5" type="text" placeholder="Enter a pick-up location" />
            <input onClick={()=>{setPanelOpen(true)}} value={destination} onChange={(e)=>{setDestination(e.target.value)}} className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3" type="text" placeholder="Enter your destination" />
          </form>
        </div>



        {/* location search panel */}
        <div ref={panelRef} className="h-0 bg-white ">
          <LocationSearchPanel />
        </div>
      </div>


      <div className="fixed w-full z-10 bottom-0 px-3 py-6 bg-white translate-y-full">
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        {/* car ride */}
        <div className="flex bg-gray-50 border-2 border-transparent active:border-gray-600 rounded-xl w-full items-center justify-between p-3 mb-2">
          <img className="h-14" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />

          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">UberGo <span className="px-3"><i className="ri-user-fill"></i>4</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">$193.20</h2>
        </div>

        {/* moto ride */}
        <div className="flex bg-gray-50 border-2 border-transparent active:border-gray-600 rounded-xl w-full items-center justify-between p-3 mb-2">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />

          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">Moto <span className="px-3"><i className="ri-user-fill"></i>1</span></h4>
            <h5 className="font-medium text-sm">1 min away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, motorcycle rides</p>
          </div>
          <h2 className="text-lg font-semibold">$32.75</h2>
        </div>


        {/* CNG ride */}
        <div className="flex bg-gray-50 border-2 border-transparent active:border-gray-600 rounded-xl w-full items-center justify-between p-3 mb-2">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />

          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">CNG <span className="px-3"><i className="ri-user-fill"></i>3</span></h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, CNG rides</p>
          </div>
          <h2 className="text-lg font-semibold">$110.50</h2>
        </div>

      </div>

    </div>
  )
}

export default Home
