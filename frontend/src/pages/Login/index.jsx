import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../config/api'

import { Container } from './styles';
import { Auth } from '../../context/AuthContext';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

export const Login = () => {

  const { token, setToken, username } = useContext(Auth);

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (token && username) {
      navigate('/search', { replace: true });
    }
  },[])

  const onSubmit = async (user) => {

    try {
      const { data } = await api.post('/api/login', user);

      if (data) {
        setToken(data);
        navigate('/search', { replace: true });
      }
    } catch (error) {
      setError(true);
      console.log(error)
    }
  }

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
              {error && 
                <p style={{color: '#fc4a41', fontSize: '1.5rem'}}>
                  Usuário ou senha inválidos
                </p>
              }
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