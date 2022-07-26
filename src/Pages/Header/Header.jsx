import './header.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Form from '../../Components/Form/Form';



export default function Header(handleChange ) {
    const refreshPage = () => { window.location.reload() }

    const handleRefresh = event => { 
        event.preventDefault() 
    }

 
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark" className='height'>
                <Container fluid>
                    {/* aca revisar lo del onclick reload porque creo q lo puedo quitar con el to ya se refresca */}
                    <Navbar.Brand><Link to='/' className='home-logo' onClick='reload()' >Todo a 1000</Link></Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} snavbarscroll='true' >
                            <Nav.Link to='/' className='options' onClick={refreshPage} onSubmit={handleRefresh} >Home</Nav.Link>|{""}
                            <Nav.Link to='product-info' className='options'>Info Producto</Nav.Link>
                        </Nav>
                        <Form></Form>
                        {/* <Form className="d-flex" onSubmit={searchItem} >
                            <FormControl type="search"  placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-success" onSubmit={searchItem} >Search</Button>

                        </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}
