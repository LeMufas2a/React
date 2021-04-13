import React from "react";

export default function InputFocus() {
  function changeBg(e) {
    e.target.style.backgroundColor = "green";
  }
  function bgRemove(e) {
    e.target.style.backgroundColor = "";
  }

  return (
    <div className="mt-5">
      <h1>Exo 4</h1>
      <h3>Change Bg</h3>
      <input type="text" onFocus={changeBg} onBlur={bgRemove} />
    </div>
  );
}
