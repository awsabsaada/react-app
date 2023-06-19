import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4n6ayio', 'template_29rn7v5', form.current, 'm0l2jIG9QhmxBrIj2')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5></h5>
            <a href="mailto:abosaadaaws96@gmail.com" target='_blank'>Sent a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5></h5>
            <a href="http://m.me/aws.abosaada" target='_blank'>Sent a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>whatsApp</h4>
            <h5></h5>
            <a href="https://api.whatsapp.com/send?phone=0079803923352" target='_blank'>Sent a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Sent Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact