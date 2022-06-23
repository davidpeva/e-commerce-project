import axios from 'axios'
import { useEffect, useState } from 'react'
import './home.css'

export const Home = ({ senProduct, nameProp }) => {

  const [item, setItem] = useState([])

  const getItems = async () => {
    try {
      const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
      setItem(res.data)
    } catch (error) {
      console.log('error Api', error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      return getItems()
    }, 2000)
  }, [])

  useEffect(() => {
    console.log('nameProp', nameProp);
  }, [nameProp])

  return (
    //<div className="App-header">
    <ul className='nombres estilos'>
      {
        item.map(product => (

          <li className='cards' key={product._id} src={product.image} onClick={() => senProduct(product._id)}>
            <img className='pictures' src={product.image} alt={product._id} />
            <br />
            {product.product_name}
            <br />
            ${product.price}
            <br />
            <br />
          </li>

        ))
      }
    </ul>
    //</div>
  )
}
