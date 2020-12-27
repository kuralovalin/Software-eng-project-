//flask tan gelen arrayı basıyo butonlada pratiğin devam sayfasına yönlendirilecek , sayfa biraz güzelleşcek bide

import {useState, useEffect } from 'react'

function Example() {
    const [words, setWord] = useState('hello from react')
        useEffect(() => {
            fetch('/fromEngDictionary')
            .then(res => res.json())
            .then(data => setWord(data))
        }, [])

    return (
        <div class="card">
            <div class="card-body">
                {"1) " + words[0]}<br/>
                {"2) " + words[1]}<br/>
                {"3) " + words[2]}<br/>
                {"4) " + words[3]}<br/>
                {"5) " + words[4]}<br/>
                {"6) " + words[5]}<br/>
                {"7) " + words[6]}<br/>
                {"8) " + words[7]}<br/>
                {"9) " + words[8]}<br/>
                {"10) "+ words[9]}<br/>
                <button type="button" class="btn btn-info">Start</button>
            </div>
        </div>


    );
}

export default Example;