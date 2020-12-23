import React, { Component, useState } from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return { value };
};

const App = () => {
    const name = useInput("Mr.");
    return (
        <div className="App">
            <h1>Hi</h1>
            <input placeholder="Name" value={name.value} />
        </div>
    );
};


export default App;