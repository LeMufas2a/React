import React from "react";

export default function Personnage({ akhtar, rename }) {
  return (
    <div>
      <p>
        Bonjour je m'appel {akhtar.nom} {akhtar.prenom}, j'ai {akhtar.age} ans
        et je viens de {akhtar.commune}
      </p>
      <button onClick={rename}>Cliqué ici pour renommer</button>
    </div>
  );
}
