import React, { Component } from 'react'
import './styledButton.css';
import avatar from './Avatar.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CallEndOutlinedIcon from '@mui/icons-material/CallEndOutlined';
import { GoHome } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { BsPen } from "react-icons/bs";
import { IoMdPaper } from "react-icons/io";

import { IoMdContact } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";

class UIproject extends Component {



  render() {
    return (
      
        <div className='parentProfileDiv' >
            <div className="profileNameHandleDiv"> 

            
            
                <img src={avatar} className="profileImage" />
                <h1> NAME </h1>
                <div>
                <BsTwitter fontSize='large'/><span>   </span>  
                <RiInstagramLine fontSize='large'/><span>   </span>  
                <ImLinkedin fontSize='large'/><br/><br/>
                </div>
            </div>
          
            
            <div className="buttonAlignment">
                
                <GoHome/> <button> Home</button><br/><br/>
                <BsPerson/> <button> About</button><br/><br/>
                <ImAttachment/>    <button> Resume</button><br/><br/>
                <BsPen/>    <button> Skills</button><br/><br/>
                <IoMdPaper/>    <button> Projects</button><br/><br/>
                <IoMdContact />   <button> Contact</button>
                
            </div>

          </div>
          
        


      
    )
  }
}

export default UIproject