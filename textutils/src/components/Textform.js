import React,{useState} from 'react'


export default function Textform(props) {
    const [text,setText]=useState(" ");
   
    const handleUpClick =()=>{
        console.log("Uppercase was clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UpperCase","success");
    }
    const handleClearClick=()=>{
      let newText="";
      setText(newText);
    }
    const handleExtraSpaces=()=>{
      let newText=text.replace(/\s+/g, ' ').trim();
      setText(newText)
    }
    const handleCopy =()=>{
      console.log("I am a copy");
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
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
        <h2 className="my-2 mb-2">{props.heading} </h2>
      <div className="mb-3">
      <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}
       style={{backgroundColor:(props.mode==='dark'?'rgb(36 74 108)':'white'),
       color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >
        {/* //disabled is not Working */}
        Convert to Uppercase</button>
        <button   disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >
        Convert to Lowercase</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >
        Copy Text</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >
        Remove Extra Spaces</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >
        Clear Text</button>
    </div>
    <div className="container my-2" style={{color:(props.mode==='dark'?'white':'black')}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.trim().length} characters </p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Required to read</p>
      <h2>Preview</h2>
      <p>{text.trim().length>0?text:"Nothing to preview Here"}</p>
    </div>
    </>
  )
}
