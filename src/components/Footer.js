import React from 'react'
import { socialinks } from '../data'
import Pagelink from './Pagelink'

const Footer = () => {
  return (
    <footer class="section footer">
      <Pagelink parentClass='footer-links' itemClass='footer-link' />

      <ul class="footer-icons">
        {
          socialinks.map((link) => {
            const { id, href, icon } = link
            return (
              <li key={id}>
                <a href={href} target="_blank" class="footer-icon" rel="noreferrer"
                ><i class={icon}></i
                ></a>
              </li>
            )
          })
        }

      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer