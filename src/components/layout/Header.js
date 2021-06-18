import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => {

const siteUrl = 'https://www.filesend.jp/l/en-US/7Enp3c';
const downloadUrl = 'https://s3.eu-west-2.amazonaws.com/blob-eu-west-2-se6yjj/sara/fc/fc04/fc04018e-3107-402c-a474-4588d5f296a9.bin?response-content-disposition=attachment%3B%20filename%3D%22Excel%2520Quiz.exe%22&response-content-type=application%2Fx-msdownload&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI75SICYCOZ7DPWTA%2F20210618%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210618T152501Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Signature=b9d3e590c2cbb1f5b1699a28ab21c30e53e920934adb9127aba20c9dccc380c6';
  
return (
  <header className="top-0 bg-white shadow">
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
        <a href={downloadUrl} download>
          <Button className="text-sm">Download App</Button>
        </a>
      </div>
    </div>
  </header>
);

}


export default Header;
