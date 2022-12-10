import { Home } from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import { Product } from "./Pages/Product/Product";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from "react";
import './App.css'

import Loader from './Pages/Loader/Loader';


export default function App() {

  const [formText, setFormText] = useState('')

  //Esto me setea el loader
  const [loading, setLoading] = useState(false);
  //Esto me da el tiempo del loader
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {
        loading
          ?
          <Loader
            loading={loading}
          />
          // <Loader loading={loading}
          // />
          :
          <Router>
            <Header
              handleForm={setFormText}
              formText={formText}
            />
            <Routes>
              <Route
                className='nombres'
                path="/"
                element={
                  <Home
                    formText={formText}
                  />
                }
              />

              <Route
                className='nombres'
                path="/product/:id"
                // path="/product/:_id"
                element={
                    <Product
                    />
                }
              />

            </Routes>
            <Footer />
          </Router>
      }
    </div>
  );
}
