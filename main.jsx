import { StrictMode } from 'react'
import './index.css'
//import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './Component/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Footer from './Component/Footer'
import { createRoot } from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
        <Route path="/Login" element= {<Login />} />
        <Route path="/"    element= {<App />} />
  </Routes>
  <Footer />
  </BrowserRouter>
);
//