import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";

import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //weather dark mode is enebled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      // document.title = "Textutils - Light Mode";
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      // setInterval(() => {
      //   document.title="TextUtils is Amazing Mode";
      // },1000);
    } else  {
      setMode("dark");
      document.body.style.backgroundColor = "#10246c";
      showAlert("Dark Mode has been Enabled", "success");
      // document.title = "Textutils - Dark Mode";

      //   setInterval(()=>{
      //   document.title=" Install TextUtils Now";
      //   },1500);
    }
    
  };
  return (
    <>
      <Navbar
        title="Textutils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      
      <div className="container my-2">
        
          
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route exact path="/" element={<Textform heading="Try TextUtils-Word Counter,Character Counter,Remove extra Spaces" mode={mode} showAlert={showAlert} />}>
        </Route>
        
      
          </Routes>
          
        {/* <Textform heading="Enter the text" mode={mode} showAlert={showAlert} /> */}

        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
