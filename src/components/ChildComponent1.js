import React from "react";

function ChildComponent1({onOptionChange}){
    return (
        <div className="child1">
            <h2>Child Component 1</h2>
            <button onClick={ () => onOptionChange("Option 1")}>Option 1</button>
        </div>
    );
}

export default ChildComponent1;