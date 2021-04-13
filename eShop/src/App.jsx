import React from "react";
import Articles from "./Components/Articles";
import Shop from "./Components/Shop";

export default class App extends React.Component {
  state = {
    argent: 20,
    panier: [],
    articles: [
      {
        nom: "Coca-Cola",
        prix: 1,
        stock: 5,
        img: "./img/Coca.jpg",
      },
      {
        nom: "Fanta",
        prix: 1.5,
        stock: 5,
        img: "./img/Fanta.jpg",
      },
      {
        nom: "Sprite",
        prix: 2,
        stock: 5,
        img: "./img/Sprite.jpg",
      },
    ],
  };

  add = (e) => {
    if (
      this.state.articles[e].stock !== 0 &&
      this.state.argent >= this.state.articles[e].prix
    ) {
      let x = this.state;

      x.argent -= x.articles[e].prix;
      x.articles[e].stock--;
      x.panier.push(x.articles[e]);
      this.setState({ x });
    }
  };

  remove = (e) => {
    let x = this.state;
    x.argent += x.articles[e].prix;
    x.articles[e].stock++;
    x.panier.splice(e, 1);
    this.setState({ x });
  };

  render() {
    return (
      <div className="container">
        <h3 className="${}">Mon argent : {this.state.argent} €</h3>
        <div className="row">
          {this.state.articles.map((e, i) => {
            return (
              <Articles
                key={i}
                article={e}
                argent={this.state.argent}
                acheter={() => {
                  this.add(i);
                }}
              />
            );
          })}
         
        </div>
        <ul className="mt-5  p-0">
        {this.state.panier.map((e, i) => {
            return(
              <Shop key={i} article={e} remove = {() => this.remove(i) }  />

        )})}
        </ul>
      </div>
    );
  }
}
