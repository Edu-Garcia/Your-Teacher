import { Container } from './styles';
import { Search } from '@mui/icons-material'

export const SearchField = ({ search, value, onChange, ...inputProps }) => {
  const handleChange = (event) => {
    let value = event.target.value;

    value = value.replace(/\d/g, '');

    event.target.value = value

    onChange(value)
  }
  

  return (
    <Container>
      {search && (
        <Search />
      )}
      <input 
        value={value} 
        onChange={handleChange} 
        {...inputProps} 
      />
    </Container>
  )
}