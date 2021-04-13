import React from "react";

export default function ClickAlert() {
  function cAlert() {
    alert("Tu as cliqué sur le bouton");
  }
  return (
    <div>
      <h1>Exo 5</h1>
      <h3>Alert onClick</h3>
      <button className='btn btn-secondary' onClick={cAlert}>Click (Alert)</button>
    </div>
  );
}
