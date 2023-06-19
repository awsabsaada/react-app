import React from 'react'
import './portfolio.css'
import img1 from '../../assets/456.jpg'
import img2 from '../../assets/9021.jpg'
import img3 from '../../assets/649.jpg'
import img4 from '../../assets/339.jpg'
import img5 from '../../assets/Wh.jpg'
import img6 from '../../assets/155.jpg'

const data = [
  {
  id: 1,
  image: img1,
  title: 'php admin panel',
  github: 'https://github.com/awsabsaada/blog-with-HTML-CSS-JS-Admin-Panel-',
  demo: 'https://awsabsaada.github.io/blog-with-HTML-CSS-JS-Admin-Panel-/',
  },
  {
  id: 2,
  image: img2,
  title: 'Blog',
  github: 'https://github.com/awsabsaada',
  demo: 'https://awsabsaada.github.io/-blog-HTML-CSS-JS/',
  },
  {
  id: 3,
  image: img3,
  title: 'php admin panel',
  github: 'https://github.com/awsabsaada',
  demo: 'https://awsabsaada.github.io/-blog-HTML-CSS-JS/',
  },
  {
  id: 4,
  image: img4,
  title: 'GYM website',
  github: 'https://github.com/awsabsaada',
  demo: 'https://awsabsaada.github.io/GYM-website-with-dynamic-form-JS-HTML-CSS-/',
  },
  {
  id: 5,
  image: img5,
  title: 'Real Estate website',
  github: 'https://github.com/awsabsaada',
  demo: 'https://awsabsaada.github.io/real-state-website/',
  },
  {
  id: 6,
  image: img6,
  title: 'product management',
  github: 'https://github.com/awsabsaada',
  demo: 'https://awsabsaada.github.io/product-management-JS.HTML.CSS-GRUD-/',
  },
]




const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default portfolio