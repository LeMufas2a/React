import React, { StrictMode } from 'react'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import "bootstrap/dist/css/bootstrap.min.css"

export default class App extends React.Component {
  render() {
    return (
      <StrictMode>
        <Header />
        <Body />
        <Footer />
      </StrictMode>
    )
  }
}