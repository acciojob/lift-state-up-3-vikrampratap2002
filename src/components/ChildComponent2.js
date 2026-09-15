import React from "react";

function ChildComponent2({onOptionChange}){
    return (
        <div className="child2">
            <h2>Child Component 2</h2>
            <button onClick={ () => onOptionChange("Option 2")}>Option 2</button>
        </div>
    );
}

export default ChildComponent2;