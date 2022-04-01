import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Auth } from '../../context/AuthContext';
import { InputCurrency } from '../../components/InputCurrency';
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';

export const NewAnnouncement = () => {

  const { username, token } = useContext(Auth);
  const navigate = useNavigate();

  const schoolLevelList = [
    { label: 'Infantil', value: 'infantil'},
    { label: 'Fundamental', value: 'fundamental'},
    { label: 'Médio', value: 'médio'},
    { label: 'Superior', value: 'superior'},
    { label: 'Pós-graduação', value: 'pós_graduação'},
    { label: 'Mestrado', value: 'mestrado'},
    { label: 'Doutorado', value: 'doutorado'},
  ];
  
  const [disciplineList, setDisciplineList] = useState(null);

  const [schoolLevel, setSchoolLevel] = useState(schoolLevelList[0].value);
  const [discipline, setDiscipline] = useState('');
  const [price, setPrice] = useState('')

  function capitalize(text) {
    const lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  useEffect(() => {
    try {
      if (token) {
        api.get('/api/disciplines', {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }).then(response => {
          if (response.status === 200) {
            const { data } = response;
            const list = data.map((discipline) => ({ label: capitalize(discipline.name), value: discipline.discipline_id }))
            setDisciplineList(list);
            setDiscipline(list[0].value);
          }
        });
      } else {
        navigate('/login', { replace: true });
      }
    } catch(error) {
      console.log(error);
    }
  }, [])

  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    cost: yup.string().required(),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (inputValues) => {
    
    const { title, description, cost, picture } = inputValues;
    const fileInfo = picture.length && picture[0];
    
    const formData = new FormData();
    
    formData.append('discipline_id', discipline);
    formData.append('school_level', schoolLevel);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('cost', cost);
    if (fileInfo) formData.append('file', fileInfo);

    try {
      if (token) {
        api.post('/api/announcements', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          }
        }).then((response) => {
          if (response.data) {
            navigate('/search', { replace: true })
          }
        })
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
            <h1>Criação de Anúncio</h1>
          </div>
          <form>
            {disciplineList && (
              <>
                <Input
                  label='Título' 
                  name='title' 
                  register={register}
                  type='text'
                  error={errors?.title}
                />
                <InputCurrency
                  value={price}
                  onChange={(text) => setPrice(text)}
                  placeholder="Ex.: 100.00"
                  form={{
                    label:'Valor por hora', 
                    name:'cost',
                    register:register,
                    type:'number',
                    error:errors?.cost,
                  }}
                />
                <Input
                  label='Grau de Ensino'
                  select={{
                    id: 'school_level',
                    name: 'school_level',
                    data: schoolLevelList,
                    currentValue: schoolLevel,
                    onChange: (e) => setSchoolLevel(e.target.value),
                  }}
                />
                <Input
                  label='Disciplina'
                  select={{
                    id: 'discipline',
                    name: 'discipline',
                    data: disciplineList,
                    currentValue: discipline,
                    onChange: (e) => setDiscipline(e.target.value),
                  }}
                />
                <Input
                  label='Sobre as Aulas' 
                  name='description' 
                  register={register}
                  type='text'
                  error={errors?.description}
                  placeholder='Descreva um pouco como funcionará as aulas'
                  textarea
                />
                <Input
                  label='Imagem do Anúncio' 
                  name='picture' 
                  register={register}
                  type='file'
                  error={errors?.picture}
                />
              </>
            )}
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
    </Container>
  )
}