import React, {useState, useEffect} from 'react';
import './App.css';
import './config'
import * as firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "blablabla",
  authDomain: "bestchatappever.firebaseapp.com",
  databaseURL: "https://bestchatappever.firebaseio.com",
  projectId: "bestchatappever",
  storageBucket: "bestchatappever.appspot.com",
  messagingSenderId: "blablabla",
  appId: "blablabla"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

const writeMsg = (username, msg) => {
  firebase.database().ref('messages/').push({
    username: username,
    msg : msg
  });
}

const fetchMsgs = (setMsg) => {

  firebase.database().ref('messages').on('value',(snap)=>{
    let listMsgs = [];
    snap.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      console.log(childData.msg)
      listMsgs.push({msg:childData.msg,
                    pseudo:childData.username})
    })
      setMsg(listMsgs)
  })
  
}



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
        <input type="text" name="msgInput" class="testInput" placeholder="write something..." autofocus/>
        <input type="submit"/>
        </form>
        </React.Fragment>
        }
    </div>
  );
}

export default App;

function TypePseudo(props){

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = document.getElementById('getPseudo');
    props.setPseudo(form.elements.usernameInput.value);
  }

  return(
    <div className="typePseudo">
        <form onSubmit={(e)=>handleSubmit(e)} id="getPseudo" >
        <input type="text" name="usernameInput" class="testInput" placeholder="Write your name" autofocus/>
        <input type="submit"/>
        </form>
    </div>
  )

}

function PrintMsgs(){

  const [msg,setMsg] = useState([]);

  useEffect(()=>{
  fetchMsgs(setMsg)
},[])

  return(
    <div className="printMsgs">
      {msg.slice(-15).map(item=>{
        return <div className="msg"><strong>{item.pseudo}</strong> - {item.msg}</div>
      })}
    </div>
  )
} 