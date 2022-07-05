import { Home } from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Product from "./Pages/Product/Product";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'


export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            className='nombres'
            path="/"
            element={
              <Home
                senProduct={(_id) => (('id desde el componente padre', _id))}
              />
            }
            
          />
          <Route path='product-info' element={<Product/>} senProduct={(_id) => (('id desde el componente padre', _id))}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}






