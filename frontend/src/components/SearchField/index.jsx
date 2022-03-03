import { Container } from './styles';
import { Search } from '@mui/icons-material'

export const SearchField = ({ search, ...inputProps }) => {
  return (
    <Container>
      {search && (
        <Search />
      )}
      <input {...inputProps} />
    </Container>
  )
}