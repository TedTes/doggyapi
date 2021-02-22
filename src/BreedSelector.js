import React,{useEffect,useState,useRef,useContext} from 'react';
import './styles.css';
import axios from 'axios';
import {BreedSelectorContext} from './App.js'
import {BREEDS_URL,RANDOM_BREED_URL} from './Api.js'

export default function BreedSelector(){

    const [data,setData]=useState([])
   //  const currRef=useRef(null)
    const [handleUpdateBreed]=useContext(BreedSelectorContext);
   
    const fetchSelectedBreed=async(e)=>{
    const response=await axios.get( `${RANDOM_BREED_URL}/${e.target.value}/images/random/8`)
    handleUpdateBreed(Object.values(response.data)[0]);
    }


   useEffect(() => {
      axios.get(BREEDS_URL).then(response=>{
      setData(Object.keys(response.data.message))
      }).catch(e=>console.log(e));
    }, [])


return<div className="breed-selector-container">
   <label>Select by breed</label>
   <select  onChange={fetchSelectedBreed} id="selector">
   <option defaultValue="selected">All breeds</option>
   {data.map((dta,index)=><option key={index}>{dta}</option>)}
   </select>
   </div>
    
}