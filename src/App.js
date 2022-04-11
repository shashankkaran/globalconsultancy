import './App.css';
// import { render } from "react-dom";
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
function App() {
  return (
    <div>
    <Navbar/>
      <BrowserRouter>
        <Routes>

          <Route index element={<Home />} />
          <Route path="franchise" element={<Franchise />} />
          <Route path="franchise/:fid" element={<SubFranchise />} />
          <Route path="contactus" element={<ContactUs />} />


        </Routes>

      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
