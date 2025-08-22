import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);

    document.body.classList.add("bg-" + cls);

    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(11 43 64)";
      showAlert("Dark mode has been enabled.", "success");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  };

  // const toggleGreen = () => {
  //   if (mode === "dark" || mode === "light") {
  //     setMode("success");
  //     document.body.style.backgroundColor = "#004726ff";
  //     showAlert("Green mode has been enabled.", "success");
  //     setTimeout(() => {
  //       setAlert(null);
  //     }, 2000);
  //   } else if (mode === "success" || mode === "dark") {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled.", "success");
  //     setTimeout(() => {
  //       setAlert(null);
  //     }, 2000);
  //   }
  // };

  // const toggleDanger = () => {
  //   if (mode === "dark" || mode === "light" || mode === "success") {
  //     setMode("danger");
  //     document.body.style.backgroundColor = "#2c0b0e";
  //     showAlert("Red mode has been enabled.", "success");
  //     setTimeout(() => {
  //       setAlert(null);
  //     }, 2000);
  //   } else if (mode === "success" || mode === "dark" || mode === "danger") {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled.", "success");
  //     document.title = "TextUtils";
  //     setTimeout(() => {
  //       setAlert(null);
  //     }, 2000);
  //   }
  // };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          // toggleGreen={toggleGreen}
          toggleMode={toggleMode}
          // toggleDanger={toggleDanger}
        />

        <div className="container my-3">
          <Alert alert={alert} />
        </div>

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />

            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enhance your text as your's choice"
                  mode={mode}
                />
              }
            />

            <Route
              path="/home"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enhance your text as your's choice"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
