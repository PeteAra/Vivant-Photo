import React from 'react';
import { FaInstagram } from "react-icons/fa";
import {
   ImFacebook,
   ImTwitter,
   ImPinterest,
   ImInstagram,
   ImYoutube,
} from 'react-icons/im'


const Socials = () => {
  return (
    <div className='flex items-center justify-center ml-24'>
      <ul className='flex gap-x-4'>
        <li>
          <a href="http://www.instgram.com/michaelavivantphoto" target='_blank'>
            <FaInstagram className='text-xl'/>
          </a>
        </li>
        <li>
          <a href="http://www.facebook.com/michaelavivantphoto" target='_blank'>
            <ImFacebook className='text-xl'/>
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Socials;