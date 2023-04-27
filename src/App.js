import logo from './logo.svg';
import './App.css';
import Newss from './components/Newss';
import Header from './components/Header';
import Tesla from './components/Tesla';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TechCrunch from './components/TechCrunch';
import { Card } from '@mui/material';
import WallStreet from './components/WallStreet';

function App() {
  return (
    <div className="App">
     {/* <Newss/> */}
     {/* <Header/> */}
     {/* <Tesla/> */}
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' exact Component={Newss}   />
      <Route path='/tesla' exact Component={Tesla} />
      <Route path='/tech' exact Component={TechCrunch} />
      <Route path='/wall' exact Component={WallStreet} />

     </Routes>
     
     </BrowserRouter>
    
   
    </div>
  );
}

export default App;
