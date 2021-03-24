import React from 'react'
import SearchBar from './SearchBar'
import './nav.css'

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="d-flex justify-content-between w-100 p-4">
                <div className="ms-5">
                    <a href="" className="fs-5 mx-2 text-white px-2">Link 1</a>
                    <a href="" className="fs-5 mx-2 text-white px-2">Link 2</a>
                    <a href="" className="fs-5 mx-2 text-white px-2">Link 3</a>
                </div>
                <div>
                    <SearchBar />
                </div>
            </nav >
        )
    }
}