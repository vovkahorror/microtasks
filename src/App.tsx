import React from 'react';
import './App.css';
import {Cars} from "./02-map/Cars";
import {Button} from "./03-Button/Button";

function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const button1Foo = (subscriber: string, age: number, city: string) => {
        console.log(subscriber, age, city);
    }
    const button2Foo = (subscriber: string) => {
        console.log(subscriber);
    }
    const button3Foo = () => {
        console.log('I\'m stupid button');
    }

    return (
        <>
            <hr/>
            <Cars cars={topCars}/>

            <hr/>
            <Button name={'My Yotube Chanel - 1'} callBack={() => button1Foo('Vasya', 30, 'Kyiv')}/>
            <Button name={'My Yotube Chanel - 2'} callBack={() => button2Foo('Petya')}/>
            <Button name={'Stupid Button'} callBack={button3Foo}/>
        </>
    );
}

export default App;
