import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import _ from "lodash";

function AppNav(props) {

  //event handler
  const handleSearch = _.debounce((value) => {
    props.filterArticles(value)
  }, 500)

  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="md">
      <Container>
        <Navbar.Brand href="#">The News Room</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              { props.navItems.map(
                  (navItem, index)=>{ return (
                      <Nav.Link href={`#/sections/${navItem.value}`} key={index}>
                            {navItem.label}  
                      </Nav.Link>
                  )})}
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search by Title"
                  className="me-2"
                  aria-label="Search"
                  onChange={ (e)=> {handleSearch(e.target.value)} }
                />
              </Form>
            <Nav.Link  href="#/signup">Sign Up</Nav.Link>
            <Nav.Link  href="#/login">Log in</Nav.Link>
            {/* { props.appState.user && <Nav.Link  href="#/preferences">Preferences</Nav.Link> }
            { props.appState.user && <button onClick={()=>{logOut(props.setAppState)}}>Log Out</button> } */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNav;
