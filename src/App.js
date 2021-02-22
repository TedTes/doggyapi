import React,{useState,useEffect} from 'react'
import axios from 'axios';
import  {BASE_URL} from './Api.js'
import DogsView from "./DogsView.js";
import Header from './Header';


 export const BreedSelectorContext=React.createContext();

function App() {
  const [data,setData]=useState([]);

 const handleUpdateBreed=(dat)=>{
          setData(dat);
        }
const loadImage=(dat)=>{
  setData([...data,...dat])
}

useEffect(()=>{
axios.get(BASE_URL).then(response=>{
  setData(response.data.message);
})
  },[])


return (
  <div className="app">
   <BreedSelectorContext.Provider value={[handleUpdateBreed,loadImage]}>
      <Header />
      </BreedSelectorContext.Provider>
    {data.length!==0?<DogsView loadImage={loadImage} data={data}/>:<div className="loading"></div>} 
 
    </div>
  );
}
export default App;
