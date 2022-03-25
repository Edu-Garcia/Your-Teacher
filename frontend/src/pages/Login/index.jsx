import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../config/api'
import toast from 'react-hot-toast';

import { Container } from './styles';
import { Auth } from '../../context/AuthContext';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Toast } from '../../components/Toast';

export const Login = () => {

  const { token, setToken } = useContext(Auth);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (token) {
      navigate('/search', { replace: true });
    }
  },[])

  const onSubmit = async (user) => {

    try {
      const { data } = await api.post('/api/login', user);

      if (data) {
        setToken(data);
        navigate('/search', { replace: true });
        toast.success('Login realizado com sucesso');
      }
    } catch (error) {
      toast.error('Usuário ou senha inválidos');
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
            </form>
            <div className='submit-button'>
              <Button
                width='20rem'
                height='5rem'
                type='submit'
                onClick={handleSubmit(onSubmit)}
                // TODO trocar onclick
                // onClick={() => navigate('/search')}
                background='#3E1469'
              >
                Enviar
              </Button>
              <Toast />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}