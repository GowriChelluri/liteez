import React from 'react'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import LiteezlogoArt from "../images/LiteezlogoArt.png"
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/Footer.css"



const Footer = () => {
  return (
    <div className=' backround-footer p-5 col-12 text-light'>
      <div className='d-flex justify-content-evenly'>

        <div className='col-5'>

          <img src={LiteezlogoArt} alt="" style={{ height: '50px', }} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, suscipit quasi. Sunt tempora numquam cum aspernatur possimus doloribus iste sed voluptate in. Suscipit provident dicta fugit animi, magni laudantium aspernatur!</p>

        </div>



        <div className='col-2'>
          <h2 className='text-warning' >Company</h2>
          <p className='p-0 m-0'>Litteez</p>
          <p className='p-0 m-0'>Kondapur, Hyderabad.</p>
          <div className='d-flex align-items-center'>
            <MdOutlinePhoneIphone />
            <p className='p-0 m-0 ps-1'>+91 8125522213</p>
          </div>
          <div className='d-flex align-items-center'>
            <MdOutlineAttachEmail />
            <p className='p-0 m-0 ps-2'>support@litteez.com</p>
          </div>


        </div>



        <div className='col-2'>
          <h2  className='text-warning' >Quick Links</h2>
          <div className='ms-5'>
          <p className='p-0 m-0'>Home</p>
          <p className='p-0 m-0'>Products</p>
          <p className='p-0 m-0'>Story</p>
          <p className='p-0 m-0'>Gallery</p>         
          <p className='p-0 m-0'>Review</p>         
          <p className='p-0 m-0'>Contact</p>         
          </div>
        </div>



        
        <div className='col-2'>
          <h2 className='text-warning' >Social Media</h2>
          <div className='ms-5'>
            <div className='d-flex align-items-center'>
            <FaInstagram />

          <p className='p-0 m-0 ps-2'>Instagram</p>
          </div>

          <div className='d-flex align-items-center'>
          <FaXTwitter />
          <p className='p-0 m-0 ps-2'>Twitter</p>
          </div>
             
          </div>
        </div>




      </div>

      <p className='text-center mt-5 '>&copy; 2024 Litteez. All rights reserved.</p>



    </div>
  )
}

export default Footer
