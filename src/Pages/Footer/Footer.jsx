import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div className="main-footer ">
            <div className="container ">
                <div className="row justify-content-center">
                    {/* columna 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Impo Ganga</h4>
                        <ul className='list-unstyled'>
                            <li>Numero 1</li>
                            <li>Numero 2</li>
                            <li>Numero 3</li>
                        </ul>
                    </div>
                    {/* columna 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Impo Ganga</h4>
                        <ul className='list-unstyled'>
                            <li>Numero 1</li>
                            <li>Numero 2</li>
                            <li>Numero 3</li>
                        </ul>
                    </div>
                    {/* columna 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Impo Ganga</h4>
                        <ul className='list-unstyled'>
                            <li>Numero 1</li>
                            <li>Numero 2</li>
                            <li>Numero 3</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Mi 1er e-Commerce - Todos los derechos reservados
                    </p>
                </div>
            </div>
        </div>
    )
}
