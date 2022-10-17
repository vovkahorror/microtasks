import React, {useState} from 'react';
import './App.css';
import {Cars} from "./02-map/Cars";
import {Button} from "./03-Button/Button";
import {GetEnlarge} from "./04-useState/GetEnlarge";
import {GetMoney} from "./05-filter/GetMoney";
import {Fullinput} from "./06-input/Fullinput";
import {Input} from "./06-input/Input";
import {Button2} from "./06-input/Button";
import AppTodoList from "./07 - associativeArray/AppTodoList";

function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
    ];

    const button1Foo = (subscriber: string, age: number, city: string) => {
        console.log(subscriber, age, city);
    };
    const button2Foo = (subscriber: string) => {
        console.log(subscriber);
    };
    const button3Foo = () => {
        console.log('I\'m stupid button');
    };

    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
        ],
    );
    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message]);
    };
    const [title, setTitle] = useState('');
    const callBackButtonHandler = () => {
        addMessage(title);
        setTitle('');
    };

    return (
        <>
            <hr/>
            <Cars cars={topCars}/>

            <hr/>
            <Button name={'My Yotube Chanel - 1'} callBack={() => button1Foo('Vasya', 30, 'Kyiv')}/>
            <Button name={'My Yotube Chanel - 2'} callBack={() => button2Foo('Petya')}/>
            <Button name={'Stupid Button'} callBack={button3Foo}/>

            <hr/>
            <GetEnlarge/>

            <hr/>
            <GetMoney/>

            <hr/>
            <Fullinput addMessage={addMessage}/>

            <Input title={title} setTitle={setTitle}/>
            <Button2 name={'+'} callBack={callBackButtonHandler}/>

            {message.map((el, ind) => {
                return (
                    <div key={ind}>{el.message}</div>
                );
            })}

            <hr/>
            <AppTodoList/>
        </>
    );
}

export default App;
