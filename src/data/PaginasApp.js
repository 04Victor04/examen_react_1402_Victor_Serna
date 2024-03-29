import TituloMenu from '../components/TituloMenu';
import Ejercicio1 from '../components/Ejercicio1';
import Ejercicio2 from '../components/Ejercicio2';
import Ejercicio3 from '../components/Ejercicio3';
import FormEj2 from '../components/FormEj2';
import Ej2Api from '../components/Ej2Api';

export const PaginasApp = [
  {
    id: 1,
    path: '/',
    title: 'TítuloMenu',
    component: TituloMenu,
  },
  {
    id: 2,
    path: '/ejercicio1',
    title: 'Ejercicio 1',
    component: Ejercicio1,
  },
  {
    id: 3,
    path: '/ejercicio2',
    title: 'Ejercicio 2',
    component: Ejercicio2,
  },
  {
    id: 4,
    path: '/ej2api',
    title: 'Ejercicio2Api',
    component: Ej2Api,
  },  
  {
    id: 5,
    path: '/ejercicio3',
    title: 'Ejercicio 3',
    component: Ejercicio3,
  },
  {
    id: 6,
    path: '/formej2',
    title: 'Fromulario',
    component: FormEj2,
  },
];