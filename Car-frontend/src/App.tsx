
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from  './Pages/Home';
import  LuxAutoFooter from './Component/Footer';
import Navbar from './Component/header';
import Signin from "./Component/Authentication/Signin";
import Signup from "./Component/Authentication/Signup";

function App() {
  return (
  <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <LuxAutoFooter />
  </>
  
  );
}

export default App;