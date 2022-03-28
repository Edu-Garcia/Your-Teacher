import { InputError } from '../InputError';
import { Container } from './styles';
import { StyledSelect } from '../StyledSelect';

export const Input = ({ label, name, register, error, textarea, select, ...inputProps }) => {
  
  let selectOptions;

  if (select) {
    const { id, name, data, currentValue, onChange=()=>{}, error } = select;
    selectOptions = { id, name, data, currentValue, onChange, error }
  }
  
  return (
    <Container>
      <label>{label}</label>
      {textarea 
        ? <textarea name={name} {...register(name)} {...inputProps}/>
        : selectOptions 
            ? <StyledSelect {...selectOptions} /> 
            : <input name={name} {...register(name)} {...inputProps} />
      }

      {selectOptions && !selectOptions.currentValue && selectOptions.error &&
        <p style={{color: '#fc4a41', fontSize: '1.5rem', marginTop: '0.5rem'}}>
            {`${label} é um campo obrigatório`}
        </p>
      }
      {error && <InputError type={error.type} field={name} />}
    </Container>
  )
}