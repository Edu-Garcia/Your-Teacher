import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Settings, Logout } from '@mui/icons-material'
import { Root, StyledTrigger, StyledContent, StyledItem } from './styles'

export const StyledDropdown = ({ profile }) => {

  const navigate = useNavigate();

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
        <StyledItem onSelect={() => navigate('/')}>
          <>
            <Logout />
            Sair
          </>
        </StyledItem>
      </StyledContent>
    </Root>
  );
};
