import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './ProtectedRoutes';

import LoginProductApp from './LoginProductApp';
import DashboardProduct from './DashboardProduct';
import Home from './Home';
import AboutProduct from './AboutProduct';
import AddProduct from './AddProduct';
import ProductData from './ProductData';
import ContactUs from './ContactUs';
import PageNotFound from './PageNotFound';

const ProductStartApp = () => {
    
    let token = sessionStorage.getItem('user_token');
    
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={token ? <DashboardProduct /> : <LoginProductApp />} />
                    <Route path="/dashboard" element={<ProtectedRoutes Comp={DashboardProduct} />} />
                    <Route path="/" element={<ProtectedRoutes Comp={DashboardProduct} />} >
                        <Route exact path="home" element={<Home />} />
                        <Route exact path="about" element={<AboutProduct />} />
                        <Route exact path="addproduct" element={<AddProduct />} />
                        <Route exact path="showproduct" element={<ProductData />} />
                        <Route exact path="contact" element={<ContactUs />} />
                        <Route exact path="*" element={<PageNotFound />} />
                    </Route> */}

                    <Route path="/" element={token ? <DashboardProduct /> : <LoginProductApp />} />
                    <Route path="/login" element={<LoginProductApp />} />
                    <Route path="/dashboard" element={<ProtectedRoutes Comp={DashboardProduct} />} />
                    <Route path="/" element={<ProtectedRoutes Comp={DashboardProduct} />} >
                        <Route exact path="home" element={<Home />} />
                        <Route exact path="about" element={<AboutProduct />} />
                        <Route exact path="addproduct" element={<AddProduct />} />
                        <Route exact path="showproduct" element={<ProductData />} />
                        <Route exact path="contact" element={<ContactUs />} />
                        <Route exact path="*" element={<PageNotFound />} />
                    </Route>

                    {/* <Route path="/" element={token ? <DashboardProduct /> : <LoginProductApp />} />
                    <Route path="/" element={<DashboardProduct />} >
                        <Route exact path="home" element={<Home />} />
                        <Route exact path="about" element={<AboutProduct />} />
                        <Route exact path="addproduct" element={<AddProduct />} />
                        <Route exact path="showproduct" element={<ProductData />} />
                        <Route exact path="contact" element={<ContactUs />} />
                        
                    </Route>
                    <Route exact path="*" element={<PageNotFound />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ProductStartApp