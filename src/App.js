import React, { Component } from 'react'
import Chart from 'chart.js'

class Graficas extends Component {
  grafica = React.createRef()
  componentDidMount() {
    const ctx = this.grafica.current.getContext('2d')
    const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [5, 10, 5, 20, 20, 30, 10],
          },
        ],
      },

      // Configuration options go here
      options: {},
    })
  }
  render() {
    return (
      <div>
        <canvas ref={this.grafica} width="400" height="400"></canvas>
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <h1>Usando refs</h1>
        <Graficas />
      </div>
    )
  }
}

// const App = () => (
//   <div>
//     <div>
//       <h1>Ninja Pro</h1>
//     </div>
//   </div>
// )

export default App
