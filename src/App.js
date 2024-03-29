
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import Forgetpassword from './pages/Forgetpassword';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import Blogcatlist from './pages/Blogcatlist';
import Orders from './pages/Orders';
import Customers from './pages/Customers';

import Categorylist from './pages/Categorylist';

import Productlist from './pages/Productlist';
import Addblog from './pages/Addblog';
import Addblogcat from './pages/Addblogcat';

import Addcat from './pages/Addcat';

import Addproduct from './pages/Addproduct';
import Couponlist from './pages/couponlist';
import AddCoupon from './pages/AddCoupon';
import ViewEnq from './pages/viewEnq';
import ViewOrder from './pages/ViewOrder';
import Productlistpendding from './pages/Productlistpending';
function App() {
  return (
    <Router>
<Routes>
  <Route path='/' element={<Login/>} />
  <Route path='/reset-password' element={<Resetpassword />} />
  <Route path='/forget-password' element={<Forgetpassword />} />
  <Route path='/admin' element={<MainLayout />} >
    <Route  index element={<Dashboard/>} />
    <Route path='enquiries' element={<Enquiries/>} />
    <Route path='blog' element={<Addblog/>} />
    <Route path='blog/:id' element={<Addblog/>} />
    <Route path='blog-list' element={<Bloglist/>} />
    <Route path='blog-category-list' element={<Blogcatlist/>} />
    <Route path='orders' element={<Orders/>} />
    <Route path='order/:id' element={<ViewOrder/>} />
    <Route path='customers' element={<Customers/>} />
  
    <Route path='list-category' element={<Categorylist/>} />
    <Route path='category' element={<Addcat/>} />
    <Route path='category/:id' element={<Addcat/>} />
  
        <Route path='product-list' element={<Productlist/>} />
        <Route path='product-list' element={<Productlist/>} />
        <Route path='product-list-pending' element={<Productlistpendding/>} />
        <Route path='blog-category' element={<Addblogcat/>} />
        <Route path='blog-category/:id' element={<Addblogcat/>} />
        <Route path='product' element={<Addproduct/>} />
        <Route path='product/:codart/:desart/:stkfin/:PURNTTC' element={<Addproduct/>} />
        <Route path="coupon-list" element={<Couponlist />} />
          <Route path="coupon" element={<AddCoupon />} />
          <Route path="coupon/:id" element={<AddCoupon />} />

          <Route path='enquiries/:id' element={<ViewEnq/>} />
  </Route>

</Routes>
    </Router>
  );
}

export default App;
