import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import DogData from "./DogsData.js";
import Selector from './Selector';
import axios from 'axios';


function App() {
  const [data,setData]=useState([]);

  const updateBreed=(dat)=>{
    // console.log(dat);
setData([dat]);
  }
useEffect(()=>{
axios.get('https://dog.ceo/api/breeds/image/random/50').then(response=>{
  setData(response.data.message);
// console.log(response.data.message);
})
  },[])

  return (
    <div>
      <Selector updateBreed={updateBreed}/>
     <DogData data={data}/>
    </div>
  );
}

export default App;
