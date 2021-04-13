import React from "react";

export default function InputAlert() {
  function cpInput(e) {
    if (e.key === "Enter") {
      alert(e.target.value);
    }
  }
  return (
    <div className="mt-5">
      <h1>Exo 3</h1>
      <h3>Copy</h3>
      <input type="text" onKeyPress={cpInput} />
    </div>
  );
}
