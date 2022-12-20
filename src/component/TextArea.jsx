import { useState } from "react";
import '../component/TextArea.css'

function TextArea() {
const [text,setText]=useState("Enter Text Here");
  const handleUpClick =()=>{
    let newText = text.toUpperCase();
    setText(newText);
    
  }
  const handleLowClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClear=()=>{
    let newText = "";
    setText(newText);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
    
  }
  return (
    <div>
    <h1 style={{color:"white",fontFamily:"New Century Schoolbook,",marginTop:"22px"}}>Conversion Text Area</h1>
    <div className="container">
    <div className="mb-3">
      <textarea onChange={handleOnChange} value={text}
        className="form-control"
        rows="8"
      ></textarea>
      <div className="btn1">
      <button type="button" onClick={handleUpClick} className="btn btn-primary">Convert To Upper Case</button>&nbsp; &nbsp;
      <button type="button" onClick={handleLowClick} className="btn btn-primary">Convert To Lower Case</button>&nbsp; &nbsp;
      <button type="button" onClick={handleClear} className="btn btn-primary">Clear Text</button>
      </div>
      </div>
    </div>
    <div className="Text-sum">
    <h1>Text Summary</h1>
    <p>{text.split(" ").length}Words and {text.length}Character</p>
    <p>{0.008*text.split("").length} sec/ word read</p>
    <h3>Preview</h3>
    <p>{text}</p>
    </div>
    </div>
  );
}

export default TextArea;
