import { Button } from "../Button"
import { Container } from "./styles"
import { useNavigate } from 'react-router-dom'

export const Header = ({ search, link, buttonText }) => {
  let navigate = useNavigate();

  return (
    <Container>
      <h1 className="homepage" onClick={() => navigate('/')}>YourTeacher</h1>

      {search && (
        <h1>Barra de pesquisa</h1>
      )}

      <Button 
        width='15rem'
        height='4rem'
        color='#51238A'
        background='white'
        onClick={() => navigate(`${link}`)}
      >
        {buttonText}
      </Button>
    </Container>
  )
}