import { Container } from './styles'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'

export const Register = () => {
  return (
    <Container>
      <Header></Header>
      <div className='main'>
        <div className='mainForm'>

        </div>
        
        <div className='image' />
      </div>
    </Container>
  )
}