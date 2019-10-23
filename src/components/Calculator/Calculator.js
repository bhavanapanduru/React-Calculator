import React from "react";
import "./calculator.css";
import Button from "../Button/Button";

class Calculator extends React.Component {
    render() {
        return (
            <>
                <textarea></textarea>
                <Button value={0} />
                <Button value={1} />
                <Button value={2} />
                <Button value={3} />
                <Button value={4} />
                <Button value={5} />
                <Button value={6} />
                <Button value={7} />
                <Button value={8} />
                <Button value={9} />
                <Button value={"+"} />
                <Button value={"-"} />
            </>
        );
    }
}

export default Calculator;
