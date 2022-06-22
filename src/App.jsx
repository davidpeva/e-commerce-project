import { Home } from "./Pages/Home/Home";

import {Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route 
          path="/"
          element={<Home/>}
          />
        </Routes>
        <Footer/>
      </Router>
      


    </div>
  );
}

export default App;

