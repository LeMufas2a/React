import React, { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tete from './components/header/Tete'
import Section from './components/contenu/Section'
import Pied from './components/footer/Pied'

export default class App extends React.Component {

  render() {

    return (
      <StrictMode>
        <Tete />
        <Section />
        <Pied />
      </StrictMode>
    )
  }
}

