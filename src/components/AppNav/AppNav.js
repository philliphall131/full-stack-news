import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { logOut } from '../../utils/utils';
import _ from "lodash";
import './appNav.css'

function AppNav(props) {

  //event handler
  const handleSearch = _.debounce((value) => {
    props.filterArticles(value)
  }, 500)

  return (
    
    <Navbar bg="dark" variant="dark" sticky="top" expand="md">
      <Container fluid>
        <Navbar.Brand href="#">The News Room</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Container id="nav1">
              { props.navItems.map(
                  (navItem, index)=>{ return (
                      <Nav.Link href={`#/sections/${navItem.value}`} key={index}>
                            {navItem.label}  
                      </Nav.Link>
                  )})}
            </Container>
            <Container id="nav2">
              <Form className="d-flex mx-3">
                <FormControl
                  type="search"
                  placeholder="Search by Title"
                  className="me-2"
                  aria-label="Search"
                  onChange={ (e)=> {handleSearch(e.target.value)} }
                />
              </Form>
              { props.user && <Nav.Link  href="#/preferences">Preferences</Nav.Link>}
              { !props.user && <Nav.Link href="#/signup">Sign Up</Nav.Link>}
              { !props.user && <Nav.Link href="#/login">Log In</Nav.Link>}
              <Nav.Link onClick={logOut} href="#/">Log Out</Nav.Link>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default AppNav;
