import React from 'react'
import Article from './Article'

export default class Body extends React.Component {
    nombreArticles = "2"
    render() {
        return (
            <main className="bg-dark pt-4">
                {
                    this.nombreArticles >= 2 &&
                    <div>
                        <Article />
                        <Article />
                    </div>
                }
                {
                    this.nombreArticles < 2 &&
                    <h1 className="text-white">Il n'y a pas d'article actuellement</h1>
                }

            </main>
        )
    }
}