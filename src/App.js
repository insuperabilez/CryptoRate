
import './App.css';
import {BrowserRouter,  Route,Routes,Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Reg from './pages/Reg';
import React from 'react'
import Home from './pages/Home';
import Currency from './pages/Currency';
import Footer from './components/Footer';
import { redirect } from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios'
function App() {
  const [data,setData] = useState('');
   useEffect(() => {
    const fetchData = async () => {
    const result = await axios(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc',
    );

    setData(result.data);
    
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
      <Routes>
       <Route path='/' element={<Home data={data}/>}/>
       <Route path='/registration' element={<Reg/>}/>
       <Route path='/login' element={<Auth/>}/>
       <Route exact path='/cur/:name' element={<Currency/>}/>
       </Routes>
       </main>
       <Footer></Footer>
    </div>
  );
}

export default App;
