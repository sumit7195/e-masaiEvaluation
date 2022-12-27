import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/nav'
import {Switch, Route} from "react-router-dom"
import Home from './components/Home'
import Cart from './components/Cart'
import Product from './components/Product'
import Orders from './components/Orders'



function App() {
  

  return (
    <div className="App">
      <Navbar/>

      <Switch>

      <Route path="/products/:id">
           <Product/>    
      </Route>
      
      
      <Route path="/cart">
          <Cart/>    
      </Route>
      
      <Route path="/orders">
          <Orders/>    
      </Route>
      <Route path="/">
          <Home/>    
      </Route>     




      </Switch>


    </div>
  )
}

export default App
