import React, { useState } from 'react';

import { Container } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { FilterContainer } from '../../components/FilterContainer';

export const SearchPage = () => {
  const profile = {
    username: 'Eduardo'
  }

  return (
    <Container>
      <Header 
        search 
        link='/register'
        profile={profile} 
      />
      <FilterContainer />
    </Container>
  )
}