import React from "react";

export default class Articles extends React.Component {
  render() {
    return (
      <div className="col-4">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img src={this.props.article.img} className="card-img-top" alt="..." />
          <div className={`card-body ${this.props.article.stock === 0 ? 'bg-danger' : ''|| this.props.article.stock === 1 ? 'bg-warning' : '' }`}>
            <h5 className="card-title"> {this.props.article.nom} </h5>
            <p className="card-text">Unité : {this.props.article.stock}</p>
            <p className="card-text">Prix : {this.props.article.prix}€</p>
            <button onClick={this.props.acheter}  className={`btn btn-success ${this.props.argent < this.props.article.prix ||  this.props.article.stock === 0 ?'d-none' : ""}`}>Ajouter</button>
          </div>
        </div>
      </div>
    );
  }
}
