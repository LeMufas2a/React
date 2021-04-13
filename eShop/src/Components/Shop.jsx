import React from 'react'

export default class Shop extends React.Component {
  render() {
    return (
      <div>
        <li className="list-group-item d-flex justify-content-between align-items-center mt-2">
                Produit : {this.props.article.nom} || Unités : 1 
                <button className="btn btn-danger" onClick={this.props.remove}>Retirer</button>
          </li>
      </div>
    )
  }
}