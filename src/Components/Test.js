import React, {useState} from 'react'
import Render from './Timer';

function Apps(){
    const [counter, setCounter] = useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
    return (
        <div>
            <Button count={incrementCounter} increment={5} />
            <Button count={incrementCounter} increment={10} />
            <Button count={incrementCounter} increment={15} />
            <Button count={incrementCounter} increment={20} />
            <Display message={counter} />
            <Render />
        </div>
    )
}

function Button(props){
const handleIncrement = () => props.count(props.increment);

    return (
    <button className="form" onClick={handleIncrement}>
       {props.increment}
    </button>
    )
}

function Display(props){
    return(
        <div className="form">{props.message}</div>
    )
}



export default Apps