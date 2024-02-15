import React, { useState, useEffect } from 'react';

function Func() {
    let [number, setNumber] = useState(0)

    return (
        <div>
            <h1 onClick={() => setNumber(console.log('ago'))}>Test Data</h1>
            <h2>{number}</h2>
        </div>
    );

}

export default Func