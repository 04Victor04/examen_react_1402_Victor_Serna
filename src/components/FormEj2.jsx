import React from 'react';

import { Container } from 'react-bootstrap';


class FormEj2 extends React.Component {
  constructor(props) {
    super(props);
    const elementos = []
    this.state = {
      listaComponentes: elementos,
    };
    this.imagen = React.createRef();
    this.MarcaT = React.createRef();
    this.SistemaOperativo = React.createRef();
    this.Dimension = React.createRef();
    this.AlmacenamientoT = React.createRef();
  }

  onClickAñadir() {
    const newLista = this.state.listaComponentes.concat(
      
    );
    this.setState({ listaComponentes: newLista });
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Título</h1>
          {this.state.listaComponentes}
          <input
            ref={this.imagen}
            type="text"
            placeholder="Foto:"
          />
          <br />
          <input
            ref={this.MarcaT}
            type="text"
            placeholder="Marca:"
          />
          <br />
          <input ref={this.SistemaOperativo} type="text" />
          <br />
          <input
            ref={this.Dimension}
            type="number"
            placeholder="Dimensiones:"
          />
          <br />
          <input
            ref={this.AlmacenamientoT}
            type="number"
            placeholder="Almacenamiento:"
          />
          <br />
          <button onClick={this.onClickAñadir.bind(this)}>Añadir</button>
          <br />
          {this.state.listaComponentes.map}
        </Container>
      </div>
    );
  }
}

export default FormEj2;