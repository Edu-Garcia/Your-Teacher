import { useState } from 'react';

import { Button } from "../Button"
import { Container } from "./styles"
import { useNavigate } from 'react-router-dom'
import { StyledDropdown } from '../StyledDropdown';
import { SearchField } from '../SearchField';

export const Header = ({ search, link, buttonText, profile }) => {
  let navigate = useNavigate();

  return (
    <Container>
      <h1 className="homepage" onClick={() => navigate('/')}>YourTeacher</h1>

      {search && (
        <SearchField search placeholder="Procure a disciplina que deseja" />
      )}

      {buttonText && (
        <Button
          color='#51238A'
          background='white'
          onClick={() => navigate(`${link}`)}
        >
          {buttonText}
        </Button>
      )}
      
      {profile && (
        <StyledDropdown className='profile' profile={profile.username} />
      )}
    </Container>
  )
}