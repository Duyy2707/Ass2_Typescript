import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserLayout from './components/layout/user'
import AdminLayout from './components/layout/admin'
import HomePage from './pages/home'
import DetailProduct from './pages/detail'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Admin from './pages/admin'
import ProductUpdate from './pages/product-update'

function App() {
  return <BrowserRouter>
    <Routes>
      {/* SignUp, SignIn */}
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      {/* Admin */}
      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<Admin/>}></Route>
        <Route path='product/:id' element={<ProductUpdate/>}></Route>
      </Route>
      {/*  */}
      <Route path='/' element={<UserLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/product/:id' element={<DetailProduct/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
