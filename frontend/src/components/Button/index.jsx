import { Container } from './styles'

export const Button = ({ 
  children, 
  onClick,
  color,
  background,
  type = 'button',
}) => {
  return (
    <Container 
      onClick={onClick} 
      type={type}
      color={color}
      backgroundColor={background}
    >
      {children}
    </Container>
  )
}