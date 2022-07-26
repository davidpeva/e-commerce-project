import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Home } from '../../Pages/Home/Home'


export default function Form() {
    const [item, setItem] = useState([])
    const [search, setSearch] = useState([])

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
    })

    //cambio a ver si se sube al repo q es
    // const searcher = (item) => {
    //     item.filter((product) => {
    //         return product.product_name.toString().toLowerCase().includes(search)
    //     })
    //     setItem(item)
    // }

    const handleChange = e => {
        setSearch(e.target.value)
        searcher(item)
        console.log(e.target.value)
    }

    const searcher = (item) => {
        return item.filter((product) => {
            if (item === 0){
                return item
            }
            else if(product.product_name.toLowerCase().includes(item))
            return product
        })
        setSearch(item)
        console.log(item)
    }


    return (
        <div>
            <form >
                <input
                    className='form-control-2 me-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                    value={search}
                    onChange={handleChange}
                />
                <button type='button' className='btn btn-info' onClick={handleChange}>Search</button>
            </form>
            {
                item.map(product => {
                        <Home key={product._id} nombre={product.product_name} imagen={product.image} price={product.price}></Home>
                })
            }
        </div>
    )
}


// export default function Form() {
//     const [ datos, setItem ] = useState([])
//     const [ searchInput, setSearchInput ] = useState([])
//     const [filteredResults, setFilteredResults] = useState('')

//     const getItems = async () => {
//         try {
//             const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
//             setItem(res.data)
//         } catch (error) {
//             console.log('error Api', error);
//         }
//     }

//     useEffect(() => {
//         getItems()
//     },[])

//     const searchItems = (searchValue) => {
//         setSearchInput(searchValue)
//         if(searchInput !== ''){
//             const filteredData = datos.filter((item) => {
//                 return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
//             })
//             setFilteredResults(filteredData)
//         }
//         else{
//             setFilteredResults(datos)
//         }
//     }


//     return (
//         <div>
//             <form >
//                 <input
//                     className='form-control-2 me-2'
//                     type='search'
//                     placeholder='Search'
//                     aria-label='Search'
//                     onChange={(e) => searchItems(e.target.value)}
//                 />
//                 <button type='button' className='btn btn-info' >Search</button>
//             </form>
//             {
                
//                 searchInput.length > 1 
//                 ?
//                 (filteredResults.map((item) => {
//                     return(
//                         <Home key={item._id} nombre={item.product_name} imagen={item.image} price={item.price}></Home>
//                     )
//                 })
//                 )
//                 :
//                 (datos.map((item) => {
//                     return (
//                         <Home key={item._id} nombre={item.product_name} imagen={item.image} price={item.price}></Home>
//                     )
//             })
//             )}
//         </div>
//     )
// }
