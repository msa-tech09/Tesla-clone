import React from "react";
const Button = ({ imp, text, link }) => {
  const className = imp === "secondary" ? "button button-white" : "button";
  return (
    <div className={className}>
      <a href={link}>{text}</a>
    </div>
  );
};

export default Button;
