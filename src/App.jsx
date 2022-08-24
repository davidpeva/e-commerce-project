import { Home } from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import { Product } from "./Pages/Product/Product";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { useState } from "react";
import './App.css'




export default function App() {

  const [formText, setFormText] = useState('')

  return (
    <div className="App">
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
            path="/product/:_id"
            element={
              <Product
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
