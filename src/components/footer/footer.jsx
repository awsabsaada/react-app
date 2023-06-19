import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AWS ABOSAADA</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://m.me/aws.abosaada" target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/aws.abos/" target='_blank'><BsInstagram/></a>
        <a href="http://m.me/aws.abosaada" target='_blank'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AWS ABOSAADA.. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default footer