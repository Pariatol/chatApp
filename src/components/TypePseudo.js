import React, {useState, useEffect} from 'react';

function TypePseudo(props){

    const handleSubmit = (e) => {
      e.preventDefault();
      let form = document.getElementById('getPseudo');
      props.setPseudo(form.elements.usernameInput.value);
      localStorage.setItem('chatUsername', form.elements.usernameInput.value);

    }
  
    return(
      <div className="typePseudo">
          <form onSubmit={(e)=>handleSubmit(e)} id="getPseudo" >
          <input type="text" name="usernameInput" class="testInput usernameInput" placeholder="Write your name" autofocus autoComplete="off"/>
          <input type="submit"/>
          </form>
      </div>
    )
  
  }

  export default TypePseudo;