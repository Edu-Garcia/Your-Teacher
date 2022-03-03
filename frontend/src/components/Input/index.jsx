import { InputError } from '../InputError';
import { Container } from './styles';

export const Input = ({ label, name, register, error, ...inputProps }) => {
  return (
    <Container>
      <label>{label}</label>
      <input 
        name={name} 
        {...register(name)} 
        {...inputProps} 
      />
      {error && <InputError type={error.type} field={name} />}
    </Container>
  )
}