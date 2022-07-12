import React from 'react'
import './header.css'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Header() {
    const refreshPage = () => { window.location.reload() }

    const handleRefresh = event => { event.preventDefault() }

    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark" className='height'>
                <Container fluid>
                    <Navbar.Brand><Link to='/' className='home-logo' onClick='reload()'>Todo a 1000</Link></Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} snavbarscroll='true' >
                            <Nav.Link><Link to='/' className='options' onClick={refreshPage} onSubmit={handleRefresh} >Home</Link></Nav.Link>|{""}
                            <Nav.Link><Link to='product-info' className='options'>Info Producto</Link></Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}
