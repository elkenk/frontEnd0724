
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar.jsx"
import HomePage from "./pages/global/HomePage.jsx"
import {ContactUs} from "./pages/global/ContactUs.jsx"
import Shops from "./pages/global/Shops.jsx"
import Cart from "./pages/global/Cart.jsx"
import SingleProduct from "./pages/global/SingleProduct.jsx"
import NotFound from "./pages/global/NotFound.jsx"
import AddProduct from "./pages/admin/AddProduct.jsx"
import AdminHome from "./pages/admin/AdminHome.jsx"
import EditProduct from "./pages/admin/EditProduct.jsx"
import MaintainCategories from "./pages/admin/MaintainCategories.jsx"
import MaintainProducts from "./pages/admin/MaintainProducts.jsx"
import MaintainShops from "./pages/admin/MaintainShops.jsx"
import Login from "./pages/auth/Login.jsx"
import Signup from "./pages/auth/Signup.jsx"


function App() {
  
  return (
    <div className="App">
      <NavigationBar/>

      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="contact" element={<ContactUs/>}/>
        <Route path="shops" element={<Shops/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="product/:index" element={<SingleProduct/>}/>

        <Route path="admin" element={<AdminHome/>}/>
        <Route path="admin/add-product" element={<AddProduct/>}/>
        <Route path="admin/edit-product/:index" element={<EditProduct/>}/>
        <Route path="admin/maintain-products" element={<MaintainProducts/>}/>
        <Route path="admin/maintain-categories" element={<MaintainCategories/>}/>
        <Route path="admin/maintain-shops" element={<MaintainShops/>}/>

        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
