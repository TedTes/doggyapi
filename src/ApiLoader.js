import React,{useContext} from 'react';
import axios from 'axios'
// import BreedSelectorContext from './App.js'
import './styles.css';

import {BASE_URL} from './Api.js';
export default function ApiLoader({loadImage}){
 
 
    const handleClick=async()=>{
       const response=await axios.get('https://dog.ceo/api/breeds/image/random/8')
       loadImage(response.data.message);
  
     }
return <div>
    <button onClick={handleClick}>load</button>
</div>
}