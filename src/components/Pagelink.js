import React from 'react'
import { pageLinks } from '../data'

const Pagelink = ({ parentClass, itemClass }) => {
  return (
    <ul class={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        return (
          <li>
            <a href={link.href} class={itemClass} rel="noreferrer"> {link.text} </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Pagelink