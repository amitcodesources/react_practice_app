import React from 'react'

import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom'
import Login from './Login';
import DashboardProduct from './DashboardProduct';
import Home from './Home';
import AboutProduct from './AboutProduct';
import AddProduct from './AddProduct';
import ProductData from './ProductData';
import ContactUs from './ContactUs';
import PageNotFound from './PageNotFound';
import ProtectedRoutes from './ProtectedRoutes';


const MainRoutes = () => {
  return (
      <BrowserRouter>

          <Routes>
              <Route exact path="/login" element={<Login />} />
              {/* <Route exact path="/" element={<ProtectedRoutes />} >
                  <Route exact path="/" element={<Navigate replace to="/dashboard" />} />
                  <Route path="/dashboard" element={<DashboardProduct />} />
                  <Route exact path="/home" element={<Home />} />
                  <Route exact path="/about" element={<AboutProduct />} />
                  <Route exact path="/addproduct" element={<AddProduct />} />
                  <Route exact path="/showproduct" element={<ProductData />} />
                  <Route exact path="/contact" element={<ContactUs />} />
                  <Route exact path="/*" element={<PageNotFound />} />
              </Route> */}

                  <ProtectedRoutes exact path="/" element={<Navigate replace to="/dashboard" />} />
                  <ProtectedRoutes path="/dashboard" element={<DashboardProduct />} />
                  <ProtectedRoutes exact path="/home" element={<Home />} />
                  <ProtectedRoutes exact path="/about" element={<AboutProduct />} />
                  <ProtectedRoutes exact path="/addproduct" element={<AddProduct />} />
                  <ProtectedRoutes exact path="/showproduct" element={<ProductData />} />
                  <ProtectedRoutes exact path="/contact" element={<ContactUs />} />
                  <ProtectedRoutes exact path="/*" element={<PageNotFound />} />
   
          </Routes>

      </BrowserRouter>
  )
}

export default MainRoutes