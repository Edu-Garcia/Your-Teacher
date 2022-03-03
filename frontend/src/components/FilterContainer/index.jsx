import { useState } from 'react';
import { StyledPopover } from '../StyledPopover';
import { Container, ClearSpan } from "./styles"

import { Refresh } from '@mui/icons-material'

export const FilterContainer = () => {

  return (
    <Container>
      <StyledPopover name="Atendimento">
        <h1>teste</h1>
      </StyledPopover>
      <StyledPopover name="Local" width="8rem">
        <h1>teste</h1>
      </StyledPopover>
      <StyledPopover name="Preço" width="8rem">
        <h1>teste</h1>
      </StyledPopover>
      <StyledPopover name="Grau de ensino" width="12rem">
        <h1>teste</h1>
      </StyledPopover>
      <ClearSpan>
        <Refresh />
        Limpar Filtros
      </ClearSpan>
    </Container>
  )
}