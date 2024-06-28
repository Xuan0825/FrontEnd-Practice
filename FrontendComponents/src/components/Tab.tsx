import React, { useState } from "react";

const items = [
  {
    value: "html",
    label: "HTML",
    panel:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    value: "css",
    label: "CSS",
    panel:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    value: "javascript",
    label: "JavaScript",
    panel:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

export default function Tab() {
  const [index, setIndex] = useState("html");
  return (
    <div>
      <div className="tabContainer">
        {items &&
          items.map((item) => {
            return (
              <div
                key={item.value}
                className="tabButton"
                style={
                  item.value === index
                    ? { backgroundColor: "purple", color: "white" }
                    : null
                }
                onClick={() => setIndex(item.value)}
              >
                {item.label}
              </div>
            );
          })}
      </div>
      <div className="view">
        {items.map((item) => {
          if (item.value === index) {
            return <div>{item.panel}</div>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
