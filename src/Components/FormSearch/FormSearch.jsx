import React from 'react'
import { Link } from 'react-router-dom'

export const FormSearch = (props) => {
    const { product_name, image, _id, price } = props

    return (
        <div>
            <li className='cards' key={product_name}>
                        
                <br />
                {props.product_name}
                <br />
                ${props.price}
                <br />
                <br />
            </li>
        </div>
  )
}
