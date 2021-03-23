import React from "react"

class App extends React.Component {

  render() {
    let datecourante = new Date()
    return (
      <div>
        <p>Aujourd'hui nous somme le {`${datecourante.getDate()}/${datecourante.getMonth()}/${datecourante.getFullYear()} et il est ${datecourante.getHours()}h${datecourante.getMinutes()}`} </p>
      </div>
    )
  }
}


export default App;
