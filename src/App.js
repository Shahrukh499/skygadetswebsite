import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import CardDetails from './components/CardDetails';
import Cards from './components/Cards';
import Homepage from './components/Homepage';
import About from './components/About';
import Contactus from './components/Contactus';
import Laptoppage from './components/Laptoppage';
import Camerapage from './components/Camerapage';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/skygadetswebsite" element={<Homepage/>}/>
        <Route exact path='/card' element={<Cards/>}/>
        <Route path='/cart/:id' element={<CardDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/laptop' element={<Laptoppage/>}/>
        <Route path='/camera' element={<Camerapage/>}/>
      </Routes>
    </>
  );
}

export default App;
