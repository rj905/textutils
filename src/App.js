import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#111227';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "warning");
      document.title = 'TextUtils - Light Mode';
    }
  }

  const toggleRedMode = () => {
    if (mode === 'light') {
      setMode('red');
      document.body.style.backgroundColor = '#dc143c';
      showAlert("Crimson Mode has been enabled", "danger");
      document.title = 'TextUtils - Red Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "sucess");
      document.title = 'TextUtils - Light Mode';
    }

  }
  return (
    <>
      {/* <Navbar title ="TextUtils" aboutText ="About TextUtils" /> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleRedMode={toggleRedMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar/> */}
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
