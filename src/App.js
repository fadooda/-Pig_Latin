import React, {useState} from 'react';
import './App.css';
// import 'h8k-components';

import Util from './components/Util';
const title = "Pig Latin";

function App({slides}) {
    const [textInput, setTextInput] = useState('')
    const [resultText, setResultText] = useState('')

    const inputedValues =(e)=>{
        setTextInput(e.target.value)
    }    
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
                <textarea value={textInput} onChange={inputedValues}></textarea>
                <button onClick={()=>Util(textInput,setResultText)}>Alter</button>
                <textarea value={resultText} disabled={true}></textarea>
            </div>
        </div>
    );
}

export default App;
