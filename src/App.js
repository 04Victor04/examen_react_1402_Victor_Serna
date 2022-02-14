import React from 'react';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Menu/>
      <p>
        Resuelve los ejercicios propuestos. Para ello, haz un fork de este
        repositorio desde tu cuenta de Github y sube un enlace a la tarea de
        examen. El repositorio debe tener el nombre
        examen-react-Nombre-Apellido1, donde nombre y apellido son los tuyos.
      </p>
      <Ejercicio1 />
      <Ejercicio2 />
      <Ejercicio3 />
    </div>
  );
}

export default App;