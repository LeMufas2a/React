import React, { useState } from "react";

export default function click({ clicks, setNbr }) {
  function addOne() {
    clicks += 1;
    setNbr({ clicks });
    console.log(`J'ai été cliqué ${clicks} fois`);
  }
  return (
    <div>
      <h1>Exo 1</h1>
      <h3 className="text-danger">
        Clicked <span className="text-dark"> {clicks} </span> times
      </h3>
      <button className="btn btn-success" onClick={addOne}>
        +1
      </button>
    </div>
  );
}
