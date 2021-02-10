import React from 'react';
import './styles.css';
import Selector from './Selector';
export default function DogData({data}){

    return <div>
        <h1>hello</h1>
        <div className="grid-view">
     {data.map(dta=><img className="image" src={dta} /> )}</div>
    </div>
}