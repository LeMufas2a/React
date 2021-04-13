import React, { useState } from "react";

export default function Articles({ player }) {
  const [count, setCount] = useState(0);


  return <li>{player.joueur}</li>;
}
