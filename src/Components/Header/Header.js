import logo from '../../asset/logo.jpg';
import React, { useLayoutEffect, useState } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function ShowWindowDimensions(props) {
  const [width, height] = useWindowSize();
  return <span>Window size: {width} x {height}</span>;
}



const Header = () => {
    return (
        <div className = "flex justify-center w-screen">
            <div className="h-16 p-0.25 flex justify-start shadow-md w-11/12 m-0' items-center">
                    <img src={logo} alt="Clovers Header logo" className='w-auto h-full p-1' />
                
            {/* Nav */}
            <div id = "nav" className='flex justify-start'>
                <ul className = "m-4 cursor-pointer hover:bg-slate-200">Home</ul>
               <ul className = "m-4 cursor-pointer hover:bg-slate-200">Activities</ul>
               <ul className = "m-4 cursor-pointer hover:bg-slate-200">Support</ul>
               <ul className = "m-4 cursor-pointer hover:bg-slate-200">Alumni</ul>
            </div>
               
            </div>
        </div>
        
        
    );
};

export default Header;