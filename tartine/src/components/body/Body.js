import React from 'react'
import Article from './Article'

export default class Body extends React.Component {
    render() {
        return (
            <main className="bg-dark pt-4">
                <Article />
            </main>
        )
    }
}