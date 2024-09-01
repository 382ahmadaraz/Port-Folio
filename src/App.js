import './App.css';
import Navbar from '../src/component/navbar/Navbar';
import Home from '../src/component/home/Home';
import About from '../src/component/about/About';
import Services from './component/services/Service';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';

function App() {
  return (
     <div>
 <Navbar/>
 <Home/>
 <About/>
 <Services/>
 <Contact/>
 <Footer/>
     </div>
  );
}
  
export default App;
