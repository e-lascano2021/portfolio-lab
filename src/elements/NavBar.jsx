import { useState } from 'react'
import {Container, Navbar as BootstrapNavBar, Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

function NavBar () {
  const [expanded, setExpanded] = useState(false)
  return (
    <BootstrapNavBar
      id="navbar"
      expanded={expanded} 
      expand='lg'
      sticky='top'
      bg="dark"
    >
      <Container fluid>
        <Link to='/' className='navbar-brand'>
          Emily Lascano
        </Link>
        <BootstrapNavBar.Toggle
          aria-controls='navbarScroll'
          onClick={() => setExpanded(expanded ? false : 'expanded')}
          />

        <BootstrapNavBar.Collapse 
          id='navbarScroll'
          >
          <Nav
            className='me-auto my-2 my-lg-0' 
            navbarScroll
          >
            <Link to='/about' className='nav-link' onClick={() => setExpanded(false)}>
              {expanded ? "About" : <i class="fa-solid fa-info"></i>} 
            </Link>
            
            <Link to='/contact' className='nav-link' onClick={() => setExpanded(false)}>
              {expanded ? "Contact" : <i class="fa-solid fa-phone"></i>}
            </Link>
            <Link to='/projects' className='nav-link' onClick={() => setExpanded(false)}>
              {expanded ? "Projects" : <i class="fa-solid fa-list"></i>}
            </Link>
            <Link to='/resume' className='nav-link' onClick={() => setExpanded(false)}>
              {expanded ? "Resume" : <i class="fa-solid fa-paperclip"></i>}
            </Link>
            <Link to='/technologies' className='nav-link' onClick={() => setExpanded(false)}>
              {expanded ? "Technologies " : <i class="fa-solid fa-microchip"></i>}
              
            </Link>
          </Nav>
        </BootstrapNavBar.Collapse>
      </Container>
    </BootstrapNavBar>
  )
}

export default NavBar