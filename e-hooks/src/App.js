import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Click from "./components/Click";
import InputValue from "./components/InputValue";
import InputAlert from "./components/InputAlert";
import InputFocus from "./components/InputFocus";
import ClickAlert from "./components/ClickAlert";

export default function App() {
  const [nbr, setNbr] = useState({
    clicks: 0,
  });

  const [valeur, setValeur] = useState({
    text: "Default value",
  });
  return (
    <div className=" text-center">
      <Click clicks={nbr.clicks} setNbr={setNbr} />
      <InputValue text={valeur.text} setVal={setValeur} />
      <InputAlert />
      <InputFocus />
      <ClickAlert />
    </div>
  );
}
