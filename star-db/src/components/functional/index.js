import React, { useState, useEffect } from 'react';
import {doc} from "prettier";

function Func() {
    let [arr, setArr] = useState([])
    const handleClick = () => console.log('CARGO');


    useEffect(() => {
        document.addEventListener('click', handleClick)
        console.log('argo')

        return () => { document.removeEventListener('click', handleClick) }
    }, [arr])


    return (
        <div>
            <h1 onClick={() => setArr([...arr, arr.length])}>Test Data</h1>
            <ul>
                {
                    arr.map(item => <li key={item}>{item}</li>)
                }
            </ul>
        </div>
    );

}

export default Func