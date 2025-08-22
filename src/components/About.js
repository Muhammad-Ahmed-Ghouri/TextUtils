// import { useState } from "react";
import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "light" ? "black" : "white",
    border: "2px solid",
    backgroundColor:
      props.mode === "dark"
        ? "#030627"
        : props.mode === "success"
        ? "#4f8156"
        : props.mode === "danger"
        ? "rgb(162,0,0,1)"
        : "white",
  };

  return (
    <>
      <div
        className="accordion container"
        id="accordionExample"
        style={{ ...myStyle, border: "none", backgroundColor: "none" }}
      >
        <h1>About Us</h1>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ ...myStyle, border: "none" }}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item’s accordion body.</strong>Textutils
              gives you a way to analyze your text quickly and efficiently. Be
              it word count, character count or...
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ ...myStyle, border: "none" }}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              Textutils reports the number of words and characters. Thus it is
              suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ ...myStyle, border: "none" }}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in Facebook, blog, books, Excel document, PDF
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
