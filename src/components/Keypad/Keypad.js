import React from "react";
import "./Keypad.css";

function Keypad() {
    return (
        <div>
            <div className="numpad">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>C</button>
                <button>0</button>
                <button>=</button>
            </div>
            <div className="operator">
                <button>/</button>
                <button>*</button>
                <button>-</button>
                <button>+</button>
            </div>
        </div>
    );
}

export default Keypad;
