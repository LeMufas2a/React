import React from 'react'
import './search.css'

export default class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <label className="text-white fs-5 mt">Search :
                <input type="text" className="ms-2 h-25" />
                </label>
                <button className="ms-2">Go</button>
            </form>
        )
    }
}