import './header.css'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";


export default function Header({ handleForm, formText }) {

    const refreshPage = () => { window.location.reload() }

    const handleRefresh = event => {
        event.preventDefault()
    }


    return (
        <header className='height'>
            <div className='div1'>
                <div><Link to='/' className='store-logo'>Cheap 2 You</Link></div>
                <div><Link to='/' className='home' onClick={refreshPage} onSubmit={handleRefresh}>Home</Link></div>
                <div className='div2'>
                    <form className='form'>
                        <input
                            className='input'
                            type='search'
                            placeholder='Search'
                            aria-label='Search'
                            value={formText}
                            onChange={(e) => handleForm(e.target.value)}
                        />
                        <button type='button' className='button' onClick={(e) => handleForm(e.target.value)}>
                            <FaSearch />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    )
}

// export default function Header({ handleForm, formText }) {

//     const refreshPage = () => { window.location.reload() }

//     const handleRefresh = event => {
//         event.preventDefault()
//     }


//     return (
//         <header className='height'>
//             <Navbar>
//                 <Container noGutters class='container mx-0 px-0' className='container px-0'>
//                     <div><Link to='/' className='store-logo'>Cheap to You</Link></div>
//                     <div><Link to='/' className='home' onClick={refreshPage} onSubmit={handleRefresh}>Home</Link></div>
//                     <Navbar.Collapse id="navbarScroll">
//                         <Nav>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//             <form className='form'>
//                 <input
//                     className='input'
//                     type='search'
//                     placeholder='Search'
//                     aria-label='Search'
//                     value={formText}
//                     onChange={(e) => handleForm(e.target.value)}
//                 />
//                 <button type='button' className='button'>Search</button>
//             </form>
//         </header>
//     )
// }
