import React, {useState, useEffect} from 'react';
import fetchMsgs from "../functions/fetchMsgs";


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

  export default PrintMsgs;