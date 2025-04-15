import { useState } from 'react'
import requests from "./requests"
import Banner from './Component/Banner'
import { Router, Routes, Route } from 'react-router-dom';
//import Login from './Component/Login'
import Row from "./Component/Row"
import Nav from './Component/Nav'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h2>Netflix</h2>
     <Nav />
     <Banner />
     <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow} />
     <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies}/>
    
    
    </div>
  );
}

export default App;
