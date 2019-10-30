import React from "react";
import "./calculator.css";
import Result from "../Result/Result";

class Calculator extends React.Component {
    render() {
        return (
            <div id="block">
                <Result value={21}></Result>
            </div>
        );
    }
}

export default Calculator;
