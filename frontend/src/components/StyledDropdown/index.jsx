import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Logout, AddCircleOutline, Search, Delete } from '@mui/icons-material'
import { Root, StyledTrigger, StyledContent, StyledItem } from './styles'
import { Auth } from '../../context/AuthContext';
import api from '../../config/api';

export const StyledDropdown = ({ profile, onOpen }) => {
  const { token, setToken } = useContext(Auth);

  const navigate = useNavigate();

  const handleLogout = () => {
    if (token) {
      setToken(null);
      navigate('/', { replace: true });
    }
  }

  const handleNewAnnouncement = () => {
    try {
        if (token) {
          api.get('/api/teachers', {
            headers: {
              'Authorization': `Bearer ${token}`,
            }
          }).then(response => {
            if(response.data) {
              navigate('/register/announcement', { replace: true });
            } else {
              navigate('/register/teacher', { replace: true });
            }
          });
        }
      } catch(error) {
        console.log(error);
      }
  };

  return (
    <Root>
      <StyledTrigger>{profile}</StyledTrigger>
      <StyledContent sideOffset={10}>
        <StyledItem onSelect={() => navigate('/search', { replace: true })}>
          <>
            <Search />
            Busca
          </>
        </StyledItem>
        <StyledItem onSelect={handleNewAnnouncement}>
          <>
            <AddCircleOutline />
            Criar Anúncio
          </>
        </StyledItem>
        <StyledItem onSelect={onOpen}>
          <>
            <Delete />
            Excluir Conta
          </>
        </StyledItem>
        <StyledItem onSelect={handleLogout}>
          <>
            <Logout />
            Sair
          </>
        </StyledItem>
      </StyledContent>
    </Root>
  );
};
