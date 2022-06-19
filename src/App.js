

// import Login from './ProductApp/Login';
// import DashboardProduct from './ProductApp/DashboardProduct';
// import ProtectedRoutes from './ProductApp/ProtectedRoutes';
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home from './ProductApp/Home';
// import AboutProduct from './ProductApp/AboutProduct';
// import AddProduct from './ProductApp/AddProduct';
// import ProductData from './ProductApp/ProductData';
// import ContactUs from './ProductApp/ContactUs';
// import PageNotFound from './ProductApp/PageNotFound';

import CKEditor from "./Examples/CKEditor";


// import PassDataParentToChild from './PassDataParentToChild';

// import BankTransaction from './BankTransaction';
// import MainHooksComp from './Hooks/MainHooksComp';
// import MainFormComp from './FormsExapmles/MainFormComp';


function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <ProtectedRoutes path="/dashboard" element={<DashboardProduct />} >
          <Route exact path="/" element={<Navigate from="/" to="dashboard" replace />} />
          <Route exact path="*" element={<Navigate from="/" to="dashboard" replace />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="about" element={<AboutProduct />} />
          <Route exact path="addproduct" element={<AddProduct />} />
          <Route exact path="showproduct" element={<ProductData />} />
          <Route exact path="contact" element={<ContactUs />} />
          <Route exact path="*" element={<PageNotFound />} />
          </ProtectedRoutes>
        </Routes>
      </BrowserRouter> */}
    {/* <DashboardProduct/> */}
    
    
    
    
    {/* <PassDataParentToChild name='Amit01' email='amit1@gmail.com'/> */}
    {/* <PassDataParentToChild name='Amit02' email='amit2@gmail.com'/> */}
    {/* <PassDataParentToChild name='Amit02' email='amit2@gmail.com'/> */}

    {/* <BankTransaction /> */}


    {/* <MainHooksComp/> */}
    {/* <MainFormComp /> */}

    <CKEditor/>

    </>
  );
}

export default App;
