import { Container } from './styles'

export const Button = ({ 
  children, 
  width, 
  height,
  onClick,
  type = 'button',
  color = '#fff',
  background = '#51238A',
}) => {
  return (
    <Container 
      onClick={onClick} 
      type={type} 
      style={{ 
        width: width, 
        height: height,
        color: color,
        backgroundColor: background,
      }}
    >
      {children}
    </Container>
  )
}