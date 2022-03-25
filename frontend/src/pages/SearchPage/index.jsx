import React, { useContext, useEffect, useState } from 'react';

import { Container, ListCards } from './styles';
import { Header } from '../../components/Header';
import { FilterContainer } from '../../components/FilterContainer';
import { Card } from '../../components/Card';
import { Toast } from '../../components/Toast';
import { Auth } from '../../context/AuthContext';

import toast from 'react-hot-toast';
import api from '../../config/api';

export const SearchPage = () => {
  const { token } = useContext(Auth);

  const [user, setUser] = useState({});
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    try {
      api.get('/api/users', {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }).then((response) => {
        setUser(response.data);
      });
      
      api.get('/api/announcements', {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }).then((response) => {
        setAnnouncements(response.data);
      });
    } catch (error) {
      toast.error('Erro ao buscar os dados');
      console.log(error)
    }
  }, []);

  console.log(user);

  return (
    <Container>
      <Header 
        search 
        link='/register'
        profile={user?.capitalized_fullname?.split(' ')[0]}
      />
      <FilterContainer />
      <ListCards>
        {announcements.map((item) => {
          return <Card props={item} />
        })}
      </ListCards>
      <Toast />
    </Container>
  )
}