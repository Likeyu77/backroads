import React from 'react'
import Title from './Title'
import { tours } from '../data'

const Tours = () => {
  return (
    <section class="section" id="tours">
      <Title title='featured' subTitle='tours' />

      <div class="section-center featured-center">
        {
          tours.map((tour) => {
            const { date, image, title, info, location, price, duration } = tour
            return (
              <article class="tour-card">
                <div class="tour-img-container">
                  <img src={image} class="tour-img" alt="" />
                  <p class="tour-date">{date}</p>
                </div>
                <div class="tour-info">
                  <div class="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{info}</p>
                  <div class="tour-footer">
                    <p>
                      <span><i class="fas fa-map"></i></span> {location}
                    </p>
                    <p>{duration}</p>
                    <p>from ${price}</p>
                  </div>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Tours