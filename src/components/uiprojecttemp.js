import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import HomeButton from './HomeButton';
import './styledButton.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CallEndOutlinedIcon from '@mui/icons-material/CallEndOutlined';
import avatar from './Avatar.jpg'

class UIproject extends Component {



  render() {
    return (
      
        <div className='parentProfileDiv' >
            <div className="profileNameHandleDiv"> 
            
                <img src={avatar} className="profileImage" />
                <h1> NAME </h1>
                <div>
                <TwitterIcon fontSize='large'/><span>   </span>  
                <InstagramIcon fontSize='large'/><span>   </span>  
                <LinkedInIcon fontSize='large'/><br/><br/>
                
                </div>
            </div>
          
            
            <div className="buttonAlignment">
                
                <HomeOutlinedIcon className='MUI'/>    <button  onClick={<HomeButton/>}> Home</button><br/><br/>
                <PermIdentityOutlinedIcon className='MUI'/>    <button> About</button><br/><br/>
                <AttachFileOutlinedIcon className='MUI'/>    <button> Resume</button><br/><br/>
                <CreateOutlinedIcon className='MUI'/>    <button> Skills</button><br/><br/>
                <AssignmentOutlinedIcon className='MUI'/>    <button> Projects</button><br/><br/>
                <CallEndOutlinedIcon className='MUI'/>   <button> Contact</button>
                
            </div>

          </div>
          
        


      
    )
  }
}

export default UIproject