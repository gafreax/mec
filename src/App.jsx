import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { setProducts } from "./store/productsSlice";
import Home from "./pages/Home"

import "./index.css"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
      const fetchProducts = async () => {
          const response = await fetch("https://dummyjson.com/products")
          const data = await response.json()
          dispatch(setProducts(data.products))
      }
      fetchProducts()
  }, 
  /* eslint-disable-next-line */
  [])

  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>;  
}

export default App;
