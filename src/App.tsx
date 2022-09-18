import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Cars} from "./02-map/Cars";

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

function App() {
    return (
        <>
            <Cars cars={topCars}/>
        </>
    );
}

export default App;
