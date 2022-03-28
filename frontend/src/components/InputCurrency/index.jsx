import { forwardRef, useCallback } from 'react';
import { Container } from './styles';
import { Input } from '../Input';

export const InputCurrency = ({ value, onChange, form,...inputProps }) => {

  const handleChange = (event) => {
    let value = event.target.value;

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1.$2');

    event.target.value = value
    onChange(value)
  }
  
  return (
    form ? (
      <Input value={value} onChange={handleChange} {...inputProps} {...form} />
    )
    : (
      <Container>
        <span className="prefix">R$</span>
        <input
          value={value} 
          onChange={handleChange} 
          {...inputProps} />
        <span>/h</span>
      </Container>
    )
  )
}