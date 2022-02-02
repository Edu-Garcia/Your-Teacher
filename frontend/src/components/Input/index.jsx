import { Container } from "./styles"

export const Input = ({ label, type = 'text' }) => {
  return (
    <Container>
      <label>{label}</label>
      <input type={type} />
    </Container>
  )
}