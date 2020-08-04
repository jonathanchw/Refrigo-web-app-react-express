import React from 'react';
import ErrorBusqueda from '../Errorbusqueda';
import {useParams} from 'react-router-dom';
import Productos from '../Productos'

const Busqueda = ({ itemsLista }) => {
  const { termino } = useParams();
  const articulos = itemsLista.filter(
    itemSelec => {
      const regex = new RegExp(termino, 'gi');
      return regex.test(itemSelec.nombre)
    });
  if (!articulos || !articulos.length) return (
    <ErrorBusqueda />
  );
  return (
    <Productos lista={articulos} />
  )
};

export default Busqueda;