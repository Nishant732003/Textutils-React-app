import React from "react";


export default function About(props) {
  //   const[myStyle,setMyStyle]=useState
  // ({
  //   color:'black',
  //   backgroundColor: 'white',
  // })
   let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?" rgb(36 74 108)":'white',
    border:"2px solid ",
    borderColor:props.mode==='dark'?'white':"#10246c",

   }
  return (
    <div className="container" style={myStyle}>
      <h2 className="my-2">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item"  >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne" style={myStyle}
            >
              <strong>Analyze your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils give you a way to analyze your text quickly and effectively.
                Be it word count or Character count
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo" style={myStyle}
            >
               <strong>Free to use</strong>
              </button>
              
            

          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is a free character counter tool that provides instant 
                character count and word count. statics for given text.Thus it is suitable for writing word and character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree" style={myStyle}
            >
              <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             This word counter software works in many browser such as chrome.firefox.edge.It suits the count character in facebook , blog etc. 
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
