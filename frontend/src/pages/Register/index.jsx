import React, { useState } from 'react';
import { Container } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
export const Register = () => {
  const { register, handleSubmit} = useForm();

  const onSubmit = data => console.log(data);

  return (
    <Container>
      <Header link='/login' buttonText='Login' />
      <div className='main'>
        <div className='mainForm'>
          <div className='form'>
            <div className='title'>
              <h1>Cadastro</h1>
            </div>
            <form>
              <Input 
                label='Nome Completo' 
                name='fullname' 
                register={register}
                type='text' 
              />
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
              <Input 
                label='Confirmar Senha' 
                name='confirmPassword' 
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
        <div className='image' />
      </div>
    </Container>
  )
}