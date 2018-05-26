import React, { Component } from "react";
import "./List.css";

function onKeyDown(id, event) {
  var x = event.key;
  //13 is enter
  if (x === 13){
    if (id === "food"){
      //
    }
  }
}

function onKeyUp() { }

class List extends Component {
  render() {
    return (
    	<div className = "container">
      <form>
        <input type="radio" name="fancy" autofocus value="Food" id="food" onkeydown="onKeyDown(id, event)" onkeyup="onKeyUp()"/>
        <input type="radio" name="fancy" value="Entertainment" id="entertainment" onkeydown="onKeyDown(id, event)" onkeyup="onKeyUp()"/>
        <input type="radio" name="fancy" value="Medication" id="medication" onkeydown="onKeyDown(id, event)" onkeyup="onKeyUp()"/>
        <input type="radio" name="fancy" value="Conversation" id="conversation" onkeydown="onKeyDown(id, event)" onkeyup="onKeyUp()"/>
        <input type="radio" name="fancy" value="Input" id="input" onkeydown="onKeyDown(event)" onkeyup="onKeyUp()"/>
        <label for="food">Food</label>
        <label for="entertainment">Entertainment</label>
        <label for="medication">Medication</label>
        <label for="conversation">Conversation</label>
        <div className="keys">Use left and right motions to navigate</div>
    </form>
    </div>
    );
  }
}

export default List;