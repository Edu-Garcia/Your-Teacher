import { Container } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';

export const Login = () => {
  const { register, handleSubmit} = useForm();

  const onSubmit = data => console.log(data);

  return (
    <Container>
      <Header link='/register' buttonText='Cadastro' />
      <div className='main'>
        <div className='image' />
        <div className='mainForm'>
          <div className='form'>
            <div className='title'>
              <h1>Login</h1>
            </div>
            <form>
              <Input
                label='E-mail' 
                name='email' 
                register={register}
                type='text' 
              />
              <Input 
                label='Senha' 
                name='password' 
                register={register}
                type='password' 
              />
            </form>
            <div className='submit-button'>
              <Button
                width='20rem'
                height='5rem'
                type='submit'
                onClick={handleSubmit(onSubmit)}
                background='#3E1469'
              >
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}