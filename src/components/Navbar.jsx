import React from 'react';
import Logo from '../assets/Yantrik.png'; 
import '../App.css'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#222321] p-4">
      <div className="container mx-auto max-w-screen-xl  flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-12 mr-4 bg-[#bababa] rounded-lg" />
          <span className="text-xl font-bold text-white">YANTRIK - 24</span>
        </div>
        
          {/* <a href="#home" className="text-white">Home</a> */}
        <div className="flex items-center space-x-4">
        <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">Register</span>
    </span>
</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
