import React from "react";
import "./Result.css";

function Result(props) {
    return (
        <p id="value">
            <strong>{props.value}</strong>
        </p>
    );
}

export default Result;
