import React,{useEffect,useState,useRef} from 'react';
import './styles.css';
import axios from 'axios';

export default function Selector(props){

    const [data,setData]=useState([])
    const currRef=useRef(null)
   
    const fetchSelected=()=>{
     const breed=currRef.current.value;
     axios.get( `https://dog.ceo/api/breed/${currRef.current.value}/images/random`).then(response=>{
    //   setData([Object.values(response.data)[0]]);
    // console.log(Object.values(response.data)[0])
    props.updateBreed(Object.values(response.data)[0]);

      })
    }
 useEffect(() => {
      axios.get('https://dog.ceo/api/breeds/list/all').then(response=>{
      setData(Object.keys(response.data.message));
      })
    }, [])

    return<select ref={currRef} onChange={fetchSelected} >
             {data.map(dta=><option >{dta}</option>)}
       </select>
    
}