import React, { useState } from 'react';

import { Container, ListCards } from './styles';
import { Header } from '../../components/Header';
import { FilterContainer } from '../../components/FilterContainer';
import { Card } from '../../components/Card';

export const SearchPage = () => {
  const profile = {
    username: 'Eduardo'
  }

  const data = [
    {
      fullname: 'Eduardo Garcia', 
      city: 'Gravataí', 
      state: 'RS', 
      attendance: 'all', 
      cost: 25.00, 
      schoolLevel: 'Fundamental', 
      discipline: 'Português',
    },
    {
      fullname: 'Eduardo Garcia', 
      city: 'Gravataí', 
      state: 'RS', 
      attendance: 'all', 
      cost: 25.00, 
      schoolLevel: 'Fundamental', 
      discipline: 'Português',
    },
    {
      fullname: 'Eduardo Garcia', 
      city: 'Gravataí', 
      state: 'RS', 
      attendance: 'all', 
      cost: 25.00, 
      schoolLevel: 'Fundamental', 
      discipline: 'Português',
    },
    {
      fullname: 'Eduardo Garcia', 
      city: 'Gravataí', 
      state: 'RS', 
      attendance: 'all', 
      cost: 25.00, 
      schoolLevel: 'Fundamental', 
      discipline: 'Português',
    },
    {
      fullname: 'Eduardo Garcia', 
      city: 'Gravataí', 
      state: 'RS', 
      attendance: 'all', 
      cost: 25.00, 
      schoolLevel: 'Fundamental', 
      discipline: 'Português',
    },
    {
      fullname: 'Eduardo Garcia', 
      city: 'Gravataí', 
      state: 'RS', 
      attendance: 'all', 
      cost: 25.00, 
      schoolLevel: 'Fundamental', 
      discipline: 'Português',
    }
  ]

  return (
    <Container>
      <Header 
        search 
        link='/register'
        profile={profile} 
      />
      <FilterContainer />
      <ListCards>
        {data.map((item) => {
          return  <Card props={item} />
        })}
      </ListCards>
    </Container>
  )
}