import logo from '../images/logo.svg'
import { pageLinks, socialinks } from '../data'
import Pagelink from './Pagelink'


const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <Pagelink parentClass='nav-links' itemClass='nav-link' />


        <ul class="nav-icons">
          {
            socialinks.map((link) => {
              return (
                <li>
                  <a href={link.href} target="_blank" class="nav-icon" rel="noreferrer">
                    <i class={link.icon}></i>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar