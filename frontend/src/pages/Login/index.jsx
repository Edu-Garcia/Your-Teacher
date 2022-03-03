import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

//TODO tirar import
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (user) => {
    console.log(user);
  }

  //TODO tirar metodo
  const navigate = useNavigate();

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
                error={errors?.email}
              />
              <Input 
                label='Senha' 
                name='password' 
                register={register}
                type='password'
                error={errors?.password}
              />
            </form>
            <div className='submit-button'>
              <Button
                width='20rem'
                height='5rem'
                type='submit'
                // onClick={handleSubmit(onSubmit)}
                // TODO trocar onclick
                onClick={() => navigate('/search')}
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