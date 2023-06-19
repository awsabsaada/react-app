import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/1200.jpg'
import avatar2 from '../../assets/683.jpg'
import avatar3 from '../../assets/231.jpg'
import avatar4 from '../../assets/9090.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: avatar1,
    name: 'Alexander ramko',
    review:'очень комфортный человек, сделал сайт для моего ресторана, как я хочу спасибо)) '
  },
  {
    avatar: avatar2,
    name: 'ELENA MONA',
    review:' he did like what i want and so quickly thank you so much '
  },
  {
    avatar: avatar3,
    name: 'cergei molah',
    review:' thank you aws abousaada'
  },
  {
    avatar: avatar4,
    name: 'artom 22',
    review:'It was nice doing business with you Спасибо'
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className="clinet_avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials