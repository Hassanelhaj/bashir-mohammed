import React from 'react'
import {BsFacebook, BsInstagram} from 'react-icons/bs'

import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>


             <a href='https://www.facebook.com/share/p/1mQe2AV71s2Hten8/?mibextid=RtaFA8' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              
              </a> 
              <a href='https://www.instagram.com/basherhamad7?igsh=aXc2NWlna2N4NWQ3'
              target='_blank' className='text-3xl hover:opacity-70' >
              <BsInstagram/>
              </a> 
              <a href='https://www.linkedin.com/in/basher-hamad-21b4b32b0'
              target='_blank' className='text-3xl hover:opacity-70' >
              <FaLinkedin/>
              </a> 
          
             <a target='_blank' href='mailto:basherhassan256@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons