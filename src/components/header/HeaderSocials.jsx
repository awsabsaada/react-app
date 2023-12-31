import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aws-abo-16a796270/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/awsabsaada" target="_blank"><FaGithubSquare/></a>
        <a href="https://www.instagram.com/aws.abos/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials