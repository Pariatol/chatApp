import firebase from "firebase";

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

  export default fetchMsgs;