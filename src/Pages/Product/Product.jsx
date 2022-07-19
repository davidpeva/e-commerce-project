import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './product.css'
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
                    const { data } = await axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${params._id}`)
                    setInfo(data)
                } catch (error) {
                    console.log('error Api', error);
                }
            })()
    },[params])//aca me ponia problema esLint pero la dependencia es los parametros q vienen del click


    return (
        <div className='container'>
            <img className='pictures' src={info.image} alt={info._id} />
            <div>{info.product_name}</div>
            <div>${info.price}</div>
        </div>
        //agregarle un boton de go back hay ejemplos en la pagina que me ayudo
    )
}

