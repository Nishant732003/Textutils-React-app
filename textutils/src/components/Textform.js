import React,{useState} from 'react'


export default function Textform(props) {
    const [text,setText]=useState(" ");
   
    const handleUpClick =()=>{
        console.log("Uppercase was clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UpperCase","success");
    }
    const handleCopy =()=>{
      console.log("I am a copy");
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied Text","success");
  }
  

    const handleLoClick =()=>{
      console.log("LowerCase was clicked"+text);
      let newtext=text.toLowerCase();
      setText(newtext)
      props.showAlert("Converted to LowerCase","success");
  }

  


    const handleOnChange =(event)=>{
        console.log("On change");
        setText(event.target.value);
        
    }

    // text="newtext"--wrong way haichange karne ka text
    // setText("newtext") correct way
    
  return (
    <>
    <div className="container" style={{color:(props.mode==='dark'?'white':'black')}}>
        <h1>{props.heading} </h1>
      <div className="mb-3">
      <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}
       style={{backgroundColor:(props.mode==='dark'?'grey':'white'),
       color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick} >
        Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >
        Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} >
        Copy Text</button>
    </div>
    <div className="container my-2" style={{color:(props.mode==='dark'?'white':'black')}}>
      <h1>Your Text Summary</h1>
      <p>{text===" "? 0:text.split(" ").length}words and {text.trim().length} characters </p>
      <p>{0.008*text.split(" ").length-0.008} MINUTES REQUIRED TO READ </p>
      <h2>Preview</h2>
      <p>{text.trim().length>0?text:"Enter Something to preview Here"}</p>
    </div>
    </>
  )
}
