import React from 'react';
import BreedSelector from './BreedSelector';
import './styles.css';

export default function Header(){

    return <div className="header">
        <div className="logo">dogsStore</div>
        <BreedSelector/>
      </div>
}