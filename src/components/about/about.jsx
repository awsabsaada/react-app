import React from 'react'
import './about.css'
import ME from '../../assets/326.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About image" />
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ year working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          I am reliable and can prioritize my tasks by managing my time efficiently. I live in Russia but I am originally from Syria. I also work effectively as part of a team and enjoy exchanging expertise and celebrating team success. I am enthusiastic and do not believe there are limits to my capabilities, so I am always willing to learn and gain new experiences.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      
      </div>
    </section>
  )
}

export default about