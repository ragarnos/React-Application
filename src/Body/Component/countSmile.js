import {React, useState} from 'react';


export function SmileCount() {
    const [countSmileOne, setCountOne] = useState(0);
    const [countSmileTwo, setCountTwo] = useState(0);
    const [results, Setresult] = useState('');
    const OnePlus = () => setCountOne(countSmileOne + 1)
    const TwoPlus = () => setCountTwo(countSmileTwo + 1)
    console.log(results);
    const resuls = () => {
        if(countSmileOne > countSmileTwo){
            Setresult("&#128515;");
        }else if(countSmileOne < countSmileTwo){
            Setresult('&#128545;');
        }else{
            Setresult("");
        }
    }
    return (
      <div className='container'>
        <div>
            <span className="button" onClick={OnePlus}>&#128515; +1</span>
            <span className="button" onClick={TwoPlus}>&#128545; +1</span>
        </div>
        <div>
            <button onClick={resuls}>Show Result</button>
            <div id="result">{results}</div>
        </div>
      </div>
    );
  }