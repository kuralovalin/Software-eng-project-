import {useState, useEffect } from 'react'

function Example() {
    const [hello, setHello] = useState('hello from react')
        useEffect(() => {
            fetch('/fromEngDictionary')
            .then(res => res.json())
            .then(data => setHello(data))
        }, [])
    return (
        <div>
            {hello}


        </div>
    );
}

export default Example;