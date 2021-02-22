import React from 'react';
import './styles.css';
import ApiLoader from './ApiLoader';
export default function DogsView({data,loadImage}){

    return <div className="grid-view">
     {data.map((dta,index)=><img className="dog-image" key={index} src={dta}/> )}
     <ApiLoader loadImage={loadImage}/></div>
   
}