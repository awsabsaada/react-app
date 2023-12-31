import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>middle</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>junior</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Laravel</h4>
              <small className='text-light'>junior</small>
              </div>
            </article>
          </div>
        </div>
        {/*end of frontend*/}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>php</h4>
              <small className='text-light'>middle</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>MySQL</h4>
              <small className='text-light'>middle</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>nodejs</h4>
              <small className='text-light'>junior</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Python</h4>
              <small className='text-light'>junior</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>java</h4>
              <small className='text-light'>junior</small>
              </div>
            </article>
          </div>
        </div>
        </div>
      
    </section>
  )
}

export default experience