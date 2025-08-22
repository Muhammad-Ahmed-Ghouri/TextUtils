import { React, useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    if (text.length >= 1) {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase", "success");
    }
  };

  const handleLoClick = () => {
    if (text.length >= 1) {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase", "success");
    }
  };

  const handleJoClick = () => {
    if (text.length >= 1) {
      let newText = text.replace(/\s+/g, "");
      setText(newText);
      props.showAlert("Removed all spaces", "success");
    }
  };

  const handleReClick = () => {
    if (text.length >= 1) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra spaces", "success");
    }
  };

  const handleEmClick = () => {
    if (text.length >= 1) {
      setText("");
      props.showAlert("Removed all text", "success");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    if (text.length >= 1) {
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to clipboard", "success");
    }
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            placeholder="Enter your text here."
            onChange={handleOnChange}
            name="mybox"
            rows="3"
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(216,227,238,1)",
              color: "black",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.mode === "light" || props.mode === "dark"
              ? "primary"
              : props.mode === "success"
              ? "success"
              : props.mode === "danger"
              ? "danger"
              : "primary"
          } mx-1 my-1`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" || props.mode === "dark"
              ? "primary"
              : props.mode === "success"
              ? "success"
              : props.mode === "danger"
              ? "danger"
              : "primary"
          } mx-1 my-1`}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" || props.mode === "dark"
              ? "primary"
              : props.mode === "success"
              ? "success"
              : props.mode === "danger"
              ? "danger"
              : "primary"
          } mx-1 my-1`}
          onClick={handleJoClick}
        >
          Join All Text
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" || props.mode === "dark"
              ? "primary"
              : props.mode === "success"
              ? "success"
              : props.mode === "danger"
              ? "danger"
              : "primary"
          } mx-1 my-1`}
          onClick={handleReClick}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" || props.mode === "dark"
              ? "primary"
              : props.mode === "success"
              ? "success"
              : props.mode === "danger"
              ? "danger"
              : "primary"
          } my-1 mx-1`}
          onClick={handleEmClick}
        >
          Empty textArea now
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" || props.mode === "dark"
              ? "primary"
              : props.mode === "success"
              ? "success"
              : props.mode === "danger"
              ? "danger"
              : "primary"
          } my-1 mx-1`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2 className="my-3">Your text Summary</h2>
        <p>
          Your text has <b>{text.trim().split(" ").filter(Boolean).length}</b>{" "}
          words and <b>{text.trim().length} </b>
          characters
        </p>
        <p>
          Time require to read this text for human{" "}
          <b>{0.008 * text.trim().split(" ").filter(Boolean).length}</b>{" "}
          Minutes.
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here."}</p>
      </div>
    </>
  );
}
