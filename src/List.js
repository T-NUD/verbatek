import React, { Component } from "react";
import "./List.css";
 
class List extends Component {
  render() {
    return (
    	<div className = "container">
      <form>
        <input type="radio" name="fancy" autofocus value="Food" id="food" onkeydown="onKeyDown(event)" onkeyup="onKeyUp()"/>
        <input type="radio" name="fancy" value="Entertainment" id="entertainment" onkeydown="onKeyDown(event)" onkeyup="onKeyUp()"/>
        <input type="radio" name="fancy" value="Medication" id="medication" onkeydown="onKeyDown(event)" onkeyup="onKeyUp()"/>
        <input type="radio" name="fancy" value="Conversation" id="conversation" onkeydown="onKeyDown(event)" onkeyup="onKeyUp()"/>
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