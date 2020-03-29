import firebase from "firebase";

const fetchMsgs = (msgs,setMsg) => {

    if(msgs.length===0){
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
    } else {
        firebase.database().ref('messages').on('value',(snap)=>{
            let listMsgs = [...msgs];

            listMsgs.push({
                msg:snap[snap.length-1].msg,
                pseudo:snap[snap.length-1].username
            })
            
                setMsg(listMsgs)
            })
    }
    
  }

  export default fetchMsgs;