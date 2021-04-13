import React from 'react'
import Article from './Article'

export default class Body extends React.Component {
    nbrArticles = (elem) => {
        console.log(elem);
    }
    render() {
        return (
            <main className="bg-dark pt-4">
                <div>
                    <Article title='tartine' nbr={(x) => { this.nbrArticles(x) }} />
                    <Article title='coding school' nbr={(x) => { this.nbrArticles(x) }} />
                </div>
            </main>
        )
    }
}