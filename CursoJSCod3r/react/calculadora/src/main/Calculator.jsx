import React, {useState} from "react";
import Button from "../components/Button";
import Display from '../components/Display';
import './Calculator.css';

export default function Calculator() {
    const [displayValue, setDisplayValue ] = useState('0');
    const [clearDisplay, setClearDisplay ] = useState(false);
    const [operation, setOperation ] = useState(null);
    const [values, setValues] = useState([0,0]);
    const [current, setCurrent] = useState(0);

    const clearMemory = () => {
        setDisplayValue('0')
        setClearDisplay(false)
        setOperation(null)
        setValues([0,0])
        setCurrent(0)
    }

    const setOperations = (operations) => {
        if(current === 0) {
            setOperation(operations)
            setCurrent(1)
            setClearDisplay(true);
        } else {
            console.log(operation)
            const equals = operation === '='
            const newValues = values
            switch (operation) {
                case 'x' : newValues[0] = values[0] * values[1];break;
                case '/' : newValues[0] = values[0] / values[1];break;
                case '+' : newValues[0] = values[0] + values[1];break;
                case '-' : newValues[0] = values[0] - values[1];break;
                default : break;
            }
            console.log(newValues[0])
            newValues[1] = 0;
            setValues(newValues);
            setDisplayValue(newValues[0]);
            setOperation( equals ? null : operation);
            setCurrent(equals ? 0 : 1);
            setClearDisplay(!equals)
        }
    }
    
    const addDigit = (n) => {
        if(n === '.' && displayValue.includes('.')) {
            return
        }
        const clearedDisplay = displayValue === '0' || clearDisplay
        const currentValue = clearedDisplay ? '': displayValue
        setDisplayValue( currentValue + n)
        console.log(currentValue + n)
        setClearDisplay(false)
        let item = values
        item[current] = parseFloat(currentValue + n);
        console.log(displayValue)
        setValues(item)
        console.log(values);
    }
    return (
        <div className="calculator">
            <Display value={displayValue}/>
            <Button label="AC" triple click={clearMemory}/>
            <Button label="/" operation click={setOperations}/>
            <Button label="7" click={addDigit}/>
            <Button label="8" click={addDigit}/>
            <Button label="9" click={addDigit}/>
            <Button label="x" operation click={setOperations}/>
            <Button label="4" click={addDigit}/>
            <Button label="5" click={addDigit}/>
            <Button label="6" click={addDigit}/>
            <Button label="-" operation click={setOperations}/>
            <Button label="1" click={addDigit}/>
            <Button label="2" click={addDigit}/>
            <Button label="3" click={addDigit}/>
            <Button label="+" operation click={setOperations}/>
            <Button label="0" double click={addDigit}/>
            <Button label="." click={addDigit}/>
            <Button label="=" operation click={setOperations}/>
        </div>
    )
}