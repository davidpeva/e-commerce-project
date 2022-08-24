import React from 'react'
import './footer.css'
import { AiFillInstagram, AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";


export default function Footer() {
    return (
        <div className="main-footer">
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-md-3 col-sm-6">
                        <h4 className='titulos'>Information</h4>
                        <ul className='list-unstyled'>
                            <li>About</li>
                            <li>My Account</li>
                            <li>Find us on:</li>
                            <li className='social-logos'>
                                <AiFillInstagram/>
                                <AiFillFacebook/>
                                <AiFillTwitterSquare/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='terms'>
                    <p className='terms1'>Terms Of Use</p>
                    |
                    <p className='terms2'>Privacy Policy</p>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center titulos">
                        &copy;{new Date().getFullYear()} Mi 1er e-Commerce - Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </div>
    )
}
