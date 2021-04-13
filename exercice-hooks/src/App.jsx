import React, { useState } from "react";
import Personnage from "./components/Personnage";
import Articles from "./components/Articles";

export default function App() {
  /* hooks 1 */
  const [data, setData] = useState({
    nom: "Akhtar",
    prenom: "Mohammed",
    age: 19,
    commune: "Ixelles",
  });
  /* Function for hooks 1 */
  function rename() {
    setData({
      nom: "Akhtar",
      prenom: "Yaseen",
      age: 27,
      commune: "Ixelles",
    });
  }

  /* hooks 2 */
  const [article] = useState([
    { joueur: "Zidane" },
    { joueur: "Ronaldo" },
    { joueur: "Ronaldinho" },
    { joueur: "Maradona" },
    { joueur: "Drogba" },
  ]);
  return (
    <div>
      <div>
        <Personnage akhtar={data} rename={rename} />
      </div>
      <div>
        <ol>
          {article.map((e, i) => {
            return <Articles key={i} player={e} />;
          })}
        </ol>
      </div>
    </div>
  );
}
