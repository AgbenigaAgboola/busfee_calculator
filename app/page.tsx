'use client'
import Image from 'next/image'
import BusServiceForm from './{components}/BusServiceForm'
import backgroundImage from "@/public/background.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6" style={{
      // use the src property of the image object
      // backgroundImage: `url(${backgroundImage.src})`,

      background:`linear-gradient(180deg, rgba(99,182,125,0.3) 6%, rgba(255,255,255,1) 26%, rgba(255,255,255,0.6) 79%, rgba(99,182,125,0.3) 98%), url(${backgroundImage.src})`,
      // other styles
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  
    }}>
      <p className='text-2xl font-bold'>Bus Service Fee Calculator</p>

      <BusServiceForm />
      <p className='text-xs font-bold'>
        Designed and coded by 
        <a href="https://agboola-portfolio.vercel.app/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          Agboola
        </a>
      </p>



    </main>
  )
}
