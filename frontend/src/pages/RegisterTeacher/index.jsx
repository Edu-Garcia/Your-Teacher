import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Auth } from '../../context/AuthContext';
import api from '../../config/api';

import { fetchCitiesForState, fetchStates, parseCities, parseStates } from '../../utils/ibge';

export const RegisterTeacher = () => {

  const { username, token } = useContext(Auth);
  const navigate = useNavigate()

  useEffect(() => {
    try {
      if (token && username) {
        api.get('/api/teachers', {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }).then(response => {
          if(response.data) {
            navigate('/register/announcement', { replace: true });
          }
        });
      } else {
        navigate('/login', { replace: true });
      }
    } catch(error) {
      console.log(error);
    }
  }, [])

  const attendanceList = [
    { label: 'Remoto', value: 'remoto'},
    { label: 'Presencial', value: 'presencial'},
    { label: 'Híbrido', value: 'all'},
  ]

  const [selectValues, setSelectValues] = useState({});
  const [attendance, setAttendance] = useState('remoto');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchStates().then(parseStates).then(setStates);
  }, [selectValues.cleared]);

  useEffect(() => {
    setCities([{ label: 'Carregando...', value: '' }]);
    fetchCitiesForState(selectValues.state).then(parseCities).then(setCities);
  }, [selectValues.state]);

  const handleSelectChange = (e) => {
    e.preventDefault();
    const {value, name} = e.target;

    if(name === 'state') {
      setSelectValues({ [name]: value })
    } else {
      setSelectValues({ ...selectValues, [name]: value })
    }
  }
  
  const schema = yup.object().shape({
    lattes: yup.string(),
    biography: yup.string().required(),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (inputValues) => {
    if (!selectValues.state || !selectValues.city) {
      setError(true);
      return;
    }

    const data = {
      ...selectValues,
      attendance,
      ...inputValues,
    }

    try {
      if (token) {
        api.post('/api/teachers', data, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }).then(navigate('/register/announcement', { replace: true }))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Header 
        profile={username}
      />
      <div className='main'>
        <div className='form'>
          <div className='title'>
            <h1>Cadastro de Professor</h1>
          </div>
          <form>
            <Input
              label='Estado'
              select={{
                id: 'state',
                name: 'state',
                data: states,
                currentValue: selectValues.state,
                onChange: handleSelectChange,
                error: error
              }}
            />
            <Input 
              label='Cidade'
              select={{
                id: 'city',
                name: 'city',
                data: cities,
                currentValue: selectValues.city,
                onChange: handleSelectChange,
                error: error
              }}
            />
            <Input
              label='ID Lattes (Opcional)' 
              name='lattes' 
              register={register}
              type='text'
              error={errors?.lattes}
            />
            <Input
              label='Tipo de Atendimento'
              select={{
                id: 'attendance',
                name: 'attendance',
                data: attendanceList,
                currentValue: attendance,
                onChange: (e) => setAttendance(e.target.value),
                error: error
              }}
            />
          </form>
          <Input
            label='Biografia' 
            name='biography' 
            register={register}
            type='text'
            error={errors?.biography}
            placeholder='Escreva uma breve biografia sua'
            textarea
          />
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
    </Container>
  )
}