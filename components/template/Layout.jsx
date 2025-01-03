"use client"
import React, { useEffect , useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from '../molecules/Navbar';
import Footer from '../molecules/Footer';
import { Toaster } from 'react-hot-toast';
import WhatsApp from '../WhatsApp';



export default function Layout({children}) {
	const [isclick , setisclick] = useState(false)
	const handleClick = () => {
		setisclick(!isclick)
	  }


	useEffect(() => {
		AOS.init({
			offset: 0,
		  duration: 1000, 
		  easing: 'ease-in-out', 
		  once: true, 
		});
	  }, []);

	  const direction = isclick ? " ltr:left-[250px] rtl:right-[250px] " : "ltr:left-0 rtl:right-0"

  return (
	<main className="overflow-x-hidden" >
		<Navbar isclick={isclick} handleClick={handleClick} />
		<WhatsApp />

		<div className={`relative ${direction}  duration-300 transition-all `} > {children} </div>
		<Footer cn={ `relative ${direction}  duration-300 transition-all `} />
		{isclick && <div onClick={handleClick} className='bg-black bg-opacity-70 w-screen h-screen fixed top-0  '></div>}
		
		
		<Toaster position="bottom-center" duration={9000} />
	</main>
  )
}
