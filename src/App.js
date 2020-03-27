import React, {useState, useEffect} from 'react';
import TypePseudo from "./components/TypePseudo";
import PrintMsgs from "./components/PrintMsgs";
import writeMsg from "./functions/writeMsg";
import './App.css';
import './config';

function App() {

  const handleSubmit = (e,pseudo) => {
    e.preventDefault();
    let form = document.querySelector('form');
    writeMsg(pseudo,form.elements.msgInput.value);
    form.reset();
  }

  const [pseudo,setPseudo] = useState('');



  return (
    <div className="App">
      {!pseudo?<TypePseudo setPseudo={setPseudo}/>:
      <React.Fragment>
      <h1 className="chatTitle">The Best Chat App Ever</h1>
      <PrintMsgs pseudo={pseudo}/>
        <form onSubmit={(e)=>handleSubmit(e,pseudo)} class="msgForm">
        <label for="msgInput" class="testInput">{pseudo}</label>
        <input type="text" name="msgInput" class="testInput" placeholder="write something..." autofocus autoComplete="off"/>
        <input type="submit"/>
        </form>
        </React.Fragment>
        }
    </div>
  );
}

export default App;



