import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import ChangeTitle from "./components/ChangeTitle";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default App;

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
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark" || mode === "success") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    } else if (mode === "light" || mode === "success") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(11 43 64)";
      showAlert("Dark mode has been enabled.", "success");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  };

  const toggleGreen = () => {
    if (mode === "dark" || mode === "light") {
      setMode("success");
      document.body.style.backgroundColor = "#004726ff";
      showAlert("Green mode has been enabled.", "success");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    } else if (mode === "success" || mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  };

  const toggleDanger = () => {
    if (mode === "dark" || mode === "light" || mode === "success") {
      setMode("danger");
      document.body.style.backgroundColor = "#2c0b0e";
      showAlert("Red mode has been enabled.", "success");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    } else if (mode === "success" || mode === "dark" || mode === "danger") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
      document.title = "TextUtils";
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleGreen={toggleGreen}
          toggleMode={toggleMode}
          toggleDanger={toggleDanger}
        />

        <div className="container my-3">
          <Alert alert={alert} />
        </div>

        <ChangeTitle />

        <div className="container my-3">
          <Routes>

            <Route exact path="/about" element={<About />} />

            <Route exact path="/home" element={<TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below"
              mode={mode}
            />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
