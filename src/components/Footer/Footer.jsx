import React from 'react'
import './Footer.css'
import linkedin_icon from '../../assets/linkedin_icon.png'
import github_icon from '../../assets/github_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a href="https://www.facebook.com/sj.sanjaya.02/">
        <img src={facebook_icon} alt=""/>
        </a>
        <a href="https://www.instagram.com/sj.sanjayaa_/">
        <img src={instagram_icon} alt=""/>
        </a>
        <a href="https://github.com/Sanjayaa02/">
        <img src={github_icon} alt=""/>
        </a>
        <a href="https://www.linkedin.com/in/sanjayakumar-nayak/">
        <img src={linkedin_icon} alt=""/>
        </a>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">@ 2024 Netflix, Inc. © <a href="https://sanjayy.netlify.app/">Sanjaya Nayak</a> </p>
    </div>
  )
}

export default Footer
