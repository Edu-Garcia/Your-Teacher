import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { phoneNumber, calculateAge } from '../../utils/validations';

import { Container } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
export const Register = () => {

  const schema = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    phone: yup.string().matches(phoneNumber).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .required(),
    birthDate: yup
      .date()
      .min(new Date(1900, 0, 1))
      .test('of-age', function(value){
        return calculateAge(value) >= 18
      })
      .required(),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (user) => {
    console.log(user);
  }

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
                error={errors?.fullname}
              />
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
              <Input 
                label='Confirmar Senha' 
                name='confirmPassword' 
                register={register}
                type='password'
                error={errors?.confirmPassword}
              />
              <Input 
                label='Telefone' 
                name='phone' 
                register={register}
                type='tel'
                error={errors?.phone}
              />
              <Input 
                label='Data de Nascimento' 
                name='birthDate' 
                register={register}
                type='date'
                error={errors?.birthDate}
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