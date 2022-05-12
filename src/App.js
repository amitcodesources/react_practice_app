// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';
import ProductData from './ProductData';
import ContactUs from './ContactUs';
import PageNotFound from './PageNotFound';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';
import { Route, Routes } from 'react-router-dom';
// import Dashboard from './TravelApp/Dashboard';
// import PassDataParentToChild from './PassDataParentToChild';
import AddProduct from './AddProduct';
import Login from './Login';

function App() {
  return (
    <>

    {/* <Dashboard /> */}
    <BrowserRouter>
    <Menu/>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/about" element={<AboutUs/>}/>
              <Route exact path="/showproduct" element={<ProductData/>}/>
              <Route exact path="/addproduct" element={<AddProduct/>}/>
              <Route exact path="/contact" element={<ContactUs/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/*" element={<PageNotFound/>}/>
          </Routes>
    </BrowserRouter>
    
    {/* <CounterClass/> */}
    {/* <CounterFunction/> */}
    {/* <LifecycleClass/> */}
    {/* <LifecycleFunction/> */}
    {/* <PassDataParentToChild name='Amit01' email='amit1@gmail.com'/> */}
    {/* <PassDataParentToChild name='Amit02' email='amit2@gmail.com'/> */}
    {/* <PassDataParentToChild name='Amit02' email='amit2@gmail.com'/> */}

    </>
  );
}

export default App;
