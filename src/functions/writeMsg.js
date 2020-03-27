import firebase from "firebase";

const writeMsg = (username, msg) => {
    firebase.database().ref('messages/').push({
      username: username,
      msg : msg
    });
  }

export default writeMsg;