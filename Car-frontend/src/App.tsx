
import { Routes, Route } from 'react-router-dom';
import Home from  './Pages/Home';
import  LuxAutoFooter from './Component/Footer';
import Navbar from './Component/header';
import Signin from "./Component/Authentication/Signin";
import Signup from "./Component/Authentication/Signup";
import Inventory from './Pages/Inventory';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import { AuthProvider } from './Component/Authentication/AuthContext';

function App() {
  return (
  <AuthProvider>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <LuxAutoFooter />
  </AuthProvider>
  
  );
}

export default App;