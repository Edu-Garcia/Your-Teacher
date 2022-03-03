import { Container } from './styles';
import errors from '../../utils/errors.json';

export const InputError = ({type, field}) => {
  return <Container>{errors[field][type]}</Container>
}