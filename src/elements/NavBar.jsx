import {Container, Navbar, Nav} from "react-bootstrap"
import {Link} from "react-router-dom"


function NavBar () {
  return (
    <Navbar bg='light'>
      <Container fluid>
        <Link to='/' className='navbar-brand'>
          Your Name
        </Link>

        <Nav>
          <Link to='/about' className='nav-link'>
            About
          </Link>
          
          <Link to='/contact' className='nav-link'>
            Contact
          </Link>
          <Link to='/projects' className='nav-link'>
            Projects
          </Link>
          <Link to='/resume' className='nav-link'>
            Resume
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar