import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './product.css'
import error from '../../Assets/404.jfif'
import { useParams } from 'react-router-dom'



export const Product = () => {
    const [info, setInfo] = useState([])

    //este me ayuda a q en el link dinamico me cargue el el dato
    const params = useParams()

    useEffect(() => {
        (
            async () => {
                try {
                    //el data dentro de los curly brackets fue el que me ayudo a que el fetch sirviera
                    // const { data } = await axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${params._id}`)
                    const { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
                    setInfo(data)
                } catch (error) {
                    console.log('error Api', error);
                }
            })()
    }, [params])//aca me ponia problema esLint pero la dependencia es los parametros q vienen del click


    return (
        <div className='container product-detail'>
            <div className='div-foto'>
                {
                    info.image
                        ?
                        <img className='picture' src={info.image} alt={info.id} />
                        :
                        info.images
                            ?
                            <img className='picture' src={info.images} alt={info.id} />
                            :
                            <img className='picture' src={error} alt='error' />
                }
            </div>
            <div className='div-info'>
                <div className='important-info'>
                    {/* <div className='product-name'>{info.product_name}</div> */}
                    <div className='product-name'>{info.title}</div>
                    {/* <div>{info.brand}</div> */}
                    <div>{info.category}</div>
                    <div className='price'>${info.price}</div>
                </div>
                <div className='button-cart'>
                    <button className='button-bag' typeof='button'>Add To Shopping Bag</button>
                </div>
                <div className='general-info'>
                    <div className='product-information'>Product Information:</div>
                    <div>{info.description}</div>
                </div>
            </div>
        </div>
        //agregarle un boton de go back hay ejemplos en la pagina que me ayudo
    )
}

