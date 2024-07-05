
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import RINGS from 'vanta/dist/vanta.rings.min';
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = RINGS({
      el: vantaRef.current,
      THREE: THREE,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <Navbar/>
      <div className='bg' id="vanta" ref={vantaRef}  style={{ width: '100%', height: '92vh'}}>
        <Home />
      </div>

    </>
  );
};

export default App;

