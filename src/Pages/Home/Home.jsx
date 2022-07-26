import { Link } from 'react-router-dom'
import axios from 'axios'
import error from '../../Assets/404.jfif'
import './home.css'
import { useEffect, useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination'

export const Home = ({ senProduct, nameProp }) => {

  const [item, setItem] = useState([])

  //LOGICA PARA LA PAGINACION
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(30)

  //LOGICA PARA LA PAGINACION
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPost - postsPerPage;
  const currentPost = item.slice(indexOfFirstPage, indexOfLastPost)

  //LOGICA PARA DAR CLICK SOBRE UN NUMERO Y QUE SE MUEVA
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  //AL DAR CLICK EN UNA PAGINA NUEVA SE VA ARRIBA
  const goUp = () => { window.scrollTo(0, 0) }

  const getItems = async () => {
    try {
      const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
      setItem(res.data)
    } catch (error) {
      console.log('error Api', error);
    }
  }

  useEffect(() => {
    getItems()
  }, [])

  // useEffect(() => {
  //   console.log('nameProp', nameProp);
  // }, [nameProp])


  return (
    <div>
      <div>
        <ul className='nombres estilos'>
          {
            //ACA USO CURRENTPOST.MAP Y NO ITEM.MAP PARA QUE SOLO ME ACOMODE LOS 30 CON ITEM.MAP ME ACOMODA LOS 200
            currentPost.map(product => (
                <li className='cards' key={product._id} onClick={((_id) => senProduct(product._id))}>

                  <Link to={`/product/${product._id}`}>
                    
                  {
                    product.image
                      ?
                      <img className='pictures' src={product.image} alt={product._id} />
                      :
                      product.images
                        ?
                        <img className='pictures' src={product.images} alt={product._id} />
                        :
                        <img className='pictures' src={error} alt='error' />
                  }
                  </Link>
                  {/* {
              product.image
              ?
              <img className='pictures' src={product.image} alt={product._id}/>
              :
              product.images.value !== 'http'
              ?
              <img className='pictures' src={error} alt='error'/>
              :
              <img className='pictures' src={product.images} alt={product._id} />
              
            } */}
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
      </div>
      <div>
        <Pagination postsPerPage={postsPerPage} totalPosts={item.length} paginate={paginate} onClick={goUp()} />
      </div>
    </div>
  )
}
