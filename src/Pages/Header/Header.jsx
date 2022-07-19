import './header.css'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'


export default function Header( {item, setItem, getItems } ) {
    const refreshPage = () => { window.location.reload() }

    const handleRefresh = event => { 
        event.preventDefault() 
    }
    
    const searchItem = (busqueda) => {
        var resultadoBuqueda = item.filter((p) =>{
            if(p.product_name.toString().toLowerCase().includes(busqueda)){
                return p
            }
        })

        setItem(busqueda)
        console.log(busqueda)
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
                            <Nav.Link><Link to='/' className='options' onClick={refreshPage} onSubmit={handleRefresh} >Home</Link></Nav.Link>|{""}
                            <Nav.Link><Link to='product-info' className='options'>Info Producto</Link></Nav.Link>
                        </Nav>
                        <Form className="d-flex" onSubmit={searchItem} >
                            <FormControl type="search"  placeholder="Search" className="me-2" aria-label="Search" />
                            {/* <Link to={`/product/${buscador._id}`}> */}
                            <Button variant="outline-success" onSubmit={searchItem} >Search</Button>
                            {/* </Link> */}

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}
