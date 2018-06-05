import React from 'react';
import Loading from 'react-loading-components';
//componente pode ser usado como loading em qualquer ponto do aplicacao, pode ser evoluido 
//para receber os parametros 

const BooksLoading = () => (
  <Loading type='ball_triangle' width={100} height={100} fill='#f44242' />
);
 
export default BooksLoading;