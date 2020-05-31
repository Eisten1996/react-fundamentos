import React from 'react'
// import './TarjetaFruta.css'
import styles from './TarjetaFruta.module.css'

class TarjetaFruta extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     cantidad: 0,
  //   }
  //   // this.agregar = this.agregar.bind(this)
  //   // this.quitar = this.quitar.bind(this)

  //   const METHODS = ['agregar', 'quitar', 'limpiar']
  //   METHODS.forEach((method) => {
  //     this[method] = this[method].bind(this)
  //   })
  // }
  state = {
    cantidad: 0,
  }

  agregar = () =>
    this.setState({
      cantidad: this.state.cantidad + 1,
    })
  quitar = () =>
    this.setState({
      cantidad: this.state.cantidad - 1,
    })

  limpiar = () =>
    this.setState({
      cantidad: 0,
    })

  render() {
    const hastItem = this.state.cantidad > 0
    const activeClass = hastItem ? styles['card-active'] : ''
    const clases = `${styles.card} ${activeClass}`
    // const clases = hastItem ? 'TarjetaFruta-activa' : 'TarjetaFruta'

    // const style ={
    //     border:'1px solid black',
    //     marginBottom : '10px',
    //     borderRadius:'10px',
    //     padding:'15px',
    //     background: hastItem ? 'linear-gradient(45deg,black,#4a02f7)' : '#FFF',
    //     color: hastItem ? '#FFF' : '#000',
    //     transition: 'all 400ms ease-out',
    //     }

    return (
      <div className={clases}>
        <h3>{this.props.name}</h3>
        <hr />
        <div>Cantidad : {this.state.cantidad}</div>
        <button onClick={this.agregar}> + </button>
        <button onClick={this.quitar}> - </button>
        <button onClick={this.limpiar}> Limpiar </button>
        <p>$ {this.props.price}</p>
        <p>Total: $ {this.props.price * this.state.cantidad}</p>
      </div>
    )
  }
}
export default TarjetaFruta
