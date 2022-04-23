import './App.css';
// import { render } from "react-dom";
import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Franchise from './Pages/franchise/Franchise';
import SubFranchise from './Pages/franchise/SubFranchise';
import Home from './Pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ContactUs from './Pages/contactus/ContactUs';
import TawkTo from 'tawkto-react';
import SubService from './Pages/services/SubService';
function App() {

  useEffect(() => {

    var tawk = new TawkTo("625ad40bb0d10b6f3e6de0a1", "1g0pcojbv")

    tawk.onStatusChange((status) => {
      console.log(status)
    })

  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route index element={<Home />} />
          <Route path="franchise" element={<Franchise />} />
          <Route path="franchise/:fid" element={<SubFranchise />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="service/:sid" element={<SubService />} />


        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
