import React from "react";
import "./calculator.css";
import Result from "../Result/Result";
import Keypad from "../Keypad/Keypad";

class Calculator extends React.Component {
    render() {
        return (
            <div id="block">
                <Result value={21}></Result>
                <Keypad></Keypad>
            </div>
        );
    }
}

export default Calculator;
