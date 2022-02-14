export const Telefono = {
  field1: 'Marca',
  field2: 'Img',
  field3: 'Sistema',
  field4: 'Dimensiones',
  field5: 'Almacenamiento',
  };

  export const DatosTelef = [
    {
      Marca: localStorage.getItem('MarcaT'),
      Img: localStorage.getItem('imagen'),
      Sistema : localStorage.getItem('SistemaOperativo'),
      Dimensiones: localStorage.getItem('Dimension'),
      Almacenamiento: localStorage.getItem('AlmacenamientoT'),
    }
  ]