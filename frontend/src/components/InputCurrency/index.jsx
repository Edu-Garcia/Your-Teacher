import { forwardRef, useCallback } from 'react';
import { Container } from './styles';

export const InputCurrency = ({ value, onChange, ...inputProps }) => {

  const handleChange = (event) => {
    let value = event.target.value;

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

    event.target.value = value
    onChange(value)
  }
  
  return (
    <Container>
      <span className="prefix">R$</span>
      <input
        value={value} 
        onChange={handleChange} 
        {...inputProps} />
      <span>/h</span>
    </Container>
  )
}