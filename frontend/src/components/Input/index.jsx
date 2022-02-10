import { Container } from './styles';

export const Input = ({ label, name, register, ...inputProps }) => {
  return (
    <Container>
      <label>{label}</label>
      <input 
        name={name} 
        {...register(name)} 
        {...inputProps} 
      />
    </Container>
  )
}