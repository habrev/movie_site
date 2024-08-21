import React from 'react'
import  "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <FacebookIcon />
          <YouTubeIcon />
          <InstagramIcon />

        </div>
        <div className='footer_data'>
          <div>
            <ul>
              <li>Audio Descriptions</li>
              <li>investor relations</li>
              <li>legal notices</li>
            </ul>
          </div>
          <div>
            <ul>
            <li>help center</li>
            <li>jobs</li>
            <li>cookie preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>gift cards </li>
              <li>terms of use</li>
              <li>corporate information</li>
            </ul>
          </div>
          <div>
            <ul>
            <li>media center</li>
            <li>privacy</li>
            <li>contact us</li>
            </ul>
          </div>
        </div>
        <div className='service_code'>
          service code
        </div>
        <div className='copy-write'>
          &copy; 1997-2024 Netflix, Inc.
        </div>
      </div>      
    </div>
  )
}

export default footer
