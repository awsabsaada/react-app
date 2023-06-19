import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'
const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/*END OF U*/}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>I can design and develop a website for you that will showcase your information and make it easy for clients to get in touch. My previous clients have seen an average of 20% increase in website traffic and 15% increase in sales after I created a website for them. I will help you create a strong online presence that
                 will attract new clients and build relationships with existing ones.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Seven years of experience in photography, design, and video 
                editing using Adobe Photoshop, Adobe Premiere, and Adobe After Effects. </p>
            </li>
        
          </ul>
        </article>
        {/*END OF webdevelopment*/}

        {/*END OF U*/}
      </div>
    </section>
  )
}

export default services