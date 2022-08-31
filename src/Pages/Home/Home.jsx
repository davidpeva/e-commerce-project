import { Link } from 'react-router-dom'
import axios from 'axios'
import error from '../../Assets/404.jfif'
import './home.css'
import { useEffect, useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination'
import { FaArrowCircleUp } from "react-icons/fa";

export const Home = ({ formText }) => {
  //ESTE ME TRAE LOS PRODUCTOS
  const [item, setItem] = useState([])

  //ESTE ES PARA EL INPUT Y PODER HACER LA COPIA
  const [filterItems, setFilterItems] = useState([])

  //LOGICA PARA LA PAGINACION
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(40)

  //LOGICA PARA LA PAGINACION
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPost - postsPerPage;
  const currentPost = filterItems.slice(indexOfFirstPage, indexOfLastPost)

  //LOGICA PARA DAR CLICK SOBRE UN NUMERO Y QUE SE MUEVA
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  //AL DAR CLICK EN UNA PAGINA NUEVA SE VA ARRIBA
  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('click', goUp)
  })

  //SALE EL BOTON CLICK PARA SUBIR
  const [showGoUp, setShowGoUp] = useState(false)

  const getItems = async () => {
    try {
      const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
      setItem(res.data)
      setFilterItems(res.data)
    } catch (error) {
      console.log('error Api', error);
    }
  }

  useEffect(() => {
    getItems()
  }, [])

  useEffect(() => {
    console.log(formText)

    const searcher = () => {
      let data = item.filter((product) => {
        return product.product_name.toLowerCase().includes(formText.toLowerCase())
      })
      console.log(data)
      if (data.length === 0) {
        setFilterItems(filterItems)
      }
      setFilterItems(data)
    }
    searcher()
  }, [formText])

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setShowGoUp(true)
    } else if (window.screenY <= 300) {
      setShowGoUp(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])


  return (
    <div className='father-container'>
        <ul className='nombres estilos' >
          {
            //ACA USO CURRENTPOST.MAP Y NO ITEM.MAP PARA QUE SOLO ME ACOMODE LOS 30 CON ITEM.MAP ME ACOMODA LOS 200
            currentPost.map(product => (
              <li className='cards' key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <div className='photos'>
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

                  </div>
                  <div className='producto'>
                    <div className='p-description text-decoration-none'>{product.product_name}</div>
                    <div className='p-price'>${product.price}</div>
                  </div>
                </Link>
              </li>
            ))

          }
        </ul>
        {
          showGoUp
          && (
            // <button type='button' onClick={scrollToTop} className='back-to-top'><FaArrowCircleUp type='button' onClick={scrollToTop} className='back-to-top'/></button>
          <FaArrowCircleUp type='button' onClick={scrollToTop} className='back-to-top'/>
            )
        }
      <div className='pagination'>
        <Pagination postsPerPage={postsPerPage} totalPosts={item.length} paginate={paginate}  currentPage={currentPage}/>
      </div>
    </div>
  )
}
