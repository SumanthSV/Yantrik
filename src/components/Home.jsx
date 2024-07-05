import {React,useState,useEffect }from 'react';
import '../App.css';
import Mech from '../assets/Mech.png'
import Yantrik from '../assets/Yantrik.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {

    const[isMobile,setisMobile] = useState(false);

    const[screensize,setscreensize] = useState(window.innerWidth);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        checkmobile()
        setscreensize(window.innerWidth)
      });

    const checkmobile =() =>{
    if(window.innerWidth <= 600){
        setisMobile(true)
        setscreensize(window.innerWidth)
    }
    else{
        setisMobile(false)
        setscreensize(window.innerWidth)
        }
    }

    window.addEventListener('resize',()=>{
        checkmobile()
        setscreensize(window.innerWidth)
    })


  return (
    <div className=" flex flex-col items-center justify-center text-white p-2 ">
      <div className="w-full  flex flex-col md:flex-row items-center justify-center md:justify-center space-y-10 md:space-y-4 md:space-x-6">
        
        <div className="text-center md:text-center space-y-4">
          <h1 className={`${isMobile?'mt-10 text-2xl':'mt-0 text-4xl'}   font-bold mb-4 text-white`}>ROYAL-MECH FORUM</h1>
          <div className="flex justify-center space-y-10">
            <img src={Mech} alt="MECHANICAl" className="h-20  rounded-3xl" />
          </div>
        <h2 className="text-2xl font-semibold mb-4 text-yellow ">Presents</h2>
        <h3 className={`${isMobile?'text-4xl':'text-6xl'} font-bold mb-6 text-gold`}>{isMobile ? '¯\\_YANTRIK _/¯' : '¯\\_ YANTRIK-24 _/¯'}</h3>
        <div className="flex justify-center space-y-10">
            <img src={Yantrik} alt="Yantrik" className={`${isMobile?'h-16':'h-32'} rounded-3xl bg-[#bababa]`} />
          </div>
          <p className='text-2xl mb-6 text-yellow'>NATIONAL LEVEL TECHNICAL SYMPOSIUM</p>
          {/* <p className="text-xl mb-4 text-white">📅 12th JULY 2024, 9:00AM</p> */}
          <p className="text-base mb-6 text-white">
            📍 Bapuji Institute of Engineering and Technology
          </p>
          <h2 className={` ${isMobile?'mt-8':'mt-1'} font-bold text-[#fca311] text-3xl text-center`}>
          <Typewriter
            words={['PAPER PRESENTATION', 'MR.MECHANIC', 'ART', 'GANNY SACK RACE', 'TUG OF WAR', 'BGMI']}
            loop={true}
            cursor
            cursorStyle='✍️'
            typeSpeed={100}
            deleteSpeed={25}
            delaySpeed={1000}
          />
    </h2>
          {/* <p className="text-lg mb-8 text-gold">One Day, Unlimited Thrills, Endless Learning</p> */}
          <div className="flex justify-center md:justify-center space-x-4">
            <button className="bg-gold text-dark-purple font-semibold py-2 px-4 rounded">Buy Tickets</button>
            <button className="bg-yellow text-dark-purple font-semibold py-2 px-4 rounded">Explore Events</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
