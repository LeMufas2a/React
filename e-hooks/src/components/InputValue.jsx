import React from "react";

export default function InputValue({ text, setVal }) {
  function changeValue(e) {
    if (e.key === "Enter") {
      text = e.target.value;
      setVal({ text });
    }
  }

  return (
    <div className='mt-5'>
      <h1>Exo 2</h1>
      <h3>{text}</h3>
      <input onKeyPress={changeValue} type="text" />
    </div>
  );
}

/* 
export default function InputValue({ text, setVal }) {
  let changeTxt = (e) => {
    if (e.key === "Enter") {
      text = e.target.value;
      setVal({ text });
    }
  };

  return (
    <div>
      <h1>Exo 2</h1>
      <h3>{text}</h3>
      <input onKeyPress={changeTxt} type="text" />
    </div>
  );
} */
