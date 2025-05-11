import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { ImFacebook } from 'react-icons/im'


const Socials = () => {
  return (
    <div className='flex items-center justify-center ml-24'>
      <ul className='flex gap-x-4'>
        <li className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
          <a href="http://www.instgram.com/michaelavivantphoto" target='_blank' rel="noreferrer">
            <FaInstagram className='text-2xl'/>
          </a>
        </li>
        <li  className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
          <a href="http://www.facebook.com/michaelavivantphoto" target='_blank' rel="noreferrer">
            <ImFacebook className='text-2xl'/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;