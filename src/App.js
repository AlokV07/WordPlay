/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

//  import {
//    BrowserRouter as Router,
//    Switch,
//    Route
//  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

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

  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode = (cls) => {

    removeBodyClasses();

    document.body.classList.add('bg-'+cls)


    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success ");
      // document.title = "Dark Mode Enable";

      
      
      /* 
      setInterval(() => {
        document.title = "WordPLay is amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install WordPLay Now";
      }, 1500);*/

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success ");
      // document.title = "Light Mode Enable";
    }
  };

  return (
    <>
      {/* <Router>
      <Navbar
        title="Navbar"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Textform
                heading="Enter The Text To Analyze Below "
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router> */}

      <Navbar
        title="Navbar"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <Textform
        heading="Enter The Text To Analyze Below "
        mode={mode}
        showAlert={showAlert}
      />
      <About mode={mode} />
    </>
  );
}

export default App;
