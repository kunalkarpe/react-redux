import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Mainsection from './components/Section/MainSection/MainSection';
import ContactUs from './pages/ContactUs/ContactUs';
import { Routes, Route } from "react-router-dom"
import Menu from './pages/Products/Menu';
import Cart from './pages/Cart/Cart';
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Mainsection />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />

        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
