import { useState } from 'react';
import './App.css';
import {SpinnerCircularFixed} from 'spinners-react'
import Home from './components/Home';
import Header from './components/Header'
//import  Router  from './components/Router';
function App() {
const[isLoading,setIsLoading]=useState(true)

 setTimeout(()=>{
  setIsLoading(false)
},1000) 
  return (
    <>
    <div className='wrapper-header'>
    <Header/> 
    <h1>Flowers & Co</h1>
    </div>
    <h2>Best flowers in the City</h2>
    <div className="container">
    {  isLoading ?(<SpinnerCircularFixed
         className="spinner"
         size={80}
         thickness={112}
         speed={130}
        color="#8e4e84"
    />):(
    <Home/>
    )} 
    </div>
  </>

    
  );
}

export default App;
