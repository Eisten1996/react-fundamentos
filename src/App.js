import React, { Component } from 'react'

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'camisa unicornio',
        colors: ['#467367', '#05fd88', '#a706ee'],
        price: 20,
      },
      {
        id: 2,
        name: 'jeans',
        colors: ['#D35EFF', '#9956E8', '#876BFF', '#5662E8', '#5E96FF'],
        price: 32,
      },
      {
        id: 3,
        name: 'taza',
        colors: ['#804342', '#FFD2D1', '#FF8785', '#806969'],
        price: 20,
      },
    ],
  }
  render() {
    return (
      <div>
        <h3>Iterando listas de objetos</h3>
        <div>
          {this.state.products.map((producto) => (
            <div>
              $ {producto.price} - {producto.name}
              <div>
                {producto.colors.map((color) => (
                  <div>
                    <span
                      style={{
                        width: '13px',
                        height: '13px',
                        borderRadius: '0.1em',
                        border: '1px solid gray',
                        display: 'inline-block',
                        margin: '0.1em',
                        background: color,
                      }}
                    ></span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
// class App extends Component {
//   render() {
//     return <div></div>
//   }
// }

// const App = () => (
//   <div>
//     <div>
//       <h1>Ninja Pro</h1>
//     </div>
//   </div>
// )

export default App
