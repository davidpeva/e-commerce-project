import { Home } from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import { Product } from "./Pages/Product/Product";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Form from "./Components/Form/Form";


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
          <Route
            className='nombres'
            path="/product/:_id"
            element={
              <Product
              />
            }
          />
          <Route
            path='/form/'
            className='nombres'
            element={
              <Form
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
