import React from 'react'
export default class Nav extends React.Component {
    i = 0
    clique = (nom) => {
        console.log(`j'ai été cliqué ${this.i} fois  (${nom})`);
        this.i++
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand" onClick={() => this.clique("NavBar")}>Navbar</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <span className="nav-link active" aria-current="page" onClick={() => this.clique("Home")}>Home</span>
                            <span className="nav-link" onClick={() => this.clique("Features")}>Features</span>
                            <span className="nav-link" onClick={() => this.clique("Pricing")}>Pricing</span>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}