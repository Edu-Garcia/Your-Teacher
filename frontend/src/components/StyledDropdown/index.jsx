import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Settings, Logout } from '@mui/icons-material'
import { Root, StyledTrigger, StyledContent, StyledItem } from './styles'
import { Auth } from '../../context/AuthContext';

export const StyledDropdown = ({ profile }) => {
  const { token, setToken } = useContext(Auth);

  const navigate = useNavigate();

  const handleLogout = () => {
    if (token) {
      setToken(null);
      navigate('/', { replace: true });
    }
  }

  return (
    <Root>
      <StyledTrigger>{profile}</StyledTrigger>
      <StyledContent sideOffset={10}>
        <StyledItem>
          <>
            <Settings />
            Configurações
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
