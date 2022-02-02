import Logo from '../../assets/logo.png'
import { Container } from './styles'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <div className="logo">
        <img src={Logo} />
        <p>
          Torne mais simples e rápida sua procura pelo
          <br />
          professor ideal.
        </p>
      </div>
      <div className="login-register">
        <div className="login">
          <p>
            Já possui uma conta?
            <br />
            Efetue login
          </p>
          <Button 
            width='19rem' 
            height='5rem'
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </div>
        <div className="register">
          <p>
            Não possui uma conta?
            <br />
            Cadastre-se
          </p>
          <Button 
            width='19rem' 
            height='5rem'
            onClick={() => navigate('/register')}
          >
            Cadastro
          </Button>
        </div>
      </div>
    </Container>
  )
}