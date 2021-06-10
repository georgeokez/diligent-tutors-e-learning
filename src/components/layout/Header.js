import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <a href="#">
            <LogoIcon />
          </a>
        </div>
        Diligent Acedemy
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#">
          Home
        </AnchorLink>
        <AnchorLink className="px-4" href="#">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#">
          For Schools
        </AnchorLink>
        <AnchorLink className="px-4" href="#">
          Getting Started
        </AnchorLink>
        <AnchorLink className="px-4" href="#">
          Sign In
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <a href="../app/Excel Quiz.exe" download>
          <Button className="text-sm">Download App</Button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
