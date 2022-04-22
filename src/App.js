import { useState } from 'react';
import './App.css';
import {SpinnerCircularFixed} from 'spinners-react'
import Home from './components/Home';
function App() {
const[isLoading,setIsLoading]=useState(true)

setTimeout(()=>{
  setIsLoading(false)
},1000)
  return (
    <>
    <h1>Flowers & Co</h1>
    <h3>Best Flowers in the City</h3>
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
