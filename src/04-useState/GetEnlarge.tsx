import {useState} from "react";

export const GetEnlarge = () => {
    let [a, setA] = useState(1);
    const onClickHandler = () => {
        setA(++a);
    }
    const onClickHandlerReset = () => {
        setA(a = 0);
    }

    return (
        <>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Enlarge number</button>
            <button onClick={onClickHandlerReset}>Reset</button>
        </>
    )
}