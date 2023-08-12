import React from 'react';
import Logo from '../assets/RUPAM-MAHATO_1-min.svg'

const Header = () => {
  return(
    <header className="py-3">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            <img id='Logo'src={Logo} alt=''/>
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
