import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText ='';
    setText(newText);
    props.showAlert("Your text has been cleared!", "danger");
    
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "danger");
  }
  // const handleyUndolick = ()=>{
  //   if (handleUpClick()){
  //    let newText = setText.toLowerCase();
  //    setText(newText);
  //   }else if(handleLoClick()) {
  //     let newText = setText.toUpperCase();
  //     setText(newText);
  //   }
  //   else{
  //     setText(handleyUndolick())
  //   }

  // }
  const title =(str)=>{
    str = text.toLowerCase().split(' ');
    for (var i = 0; i< str.length; i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
    
  }
  const handleTitlelick = ()=>{
    const a = title(text);
    setText(a);
    props.showAlert("Converted to titlecase!", "success");
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your text has been copied!", "secondary");
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed from your text", "warning");

  }
  const [text, setText] = useState("");
  // text = "new text"; //Wrong way to change the state
  // setText ("setText here"); // Right way to change the state

  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className={`btn btn-${props.mode==='red'? 'light':'primary'} mx-2`} onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className={`btn btn-${props.mode==='red'? 'light':'primary'}  my-3 mx-2`} onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className={`btn btn-${props.mode==='red'? 'light':'primary'} mx-2`} onClick={handleClearClick}>
        Clear Text
      </button>
      <button className={`btn btn-${props.mode==='red'? 'light':'primary'} mx-2 my-3`} onClick={handleTitlelick}>
        Title Case
      </button>
      <button className={`btn btn-${props.mode==='red'? 'light':'primary'} mx-2 my-3`} onClick={handleCopy}>
        Copy Text
      </button>
      <button className={`btn btn-${props.mode==='red'? 'light':'primary'} mx-2 my-3`} onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
