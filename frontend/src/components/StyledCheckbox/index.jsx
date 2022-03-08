import React from 'react';
import { Check } from '@mui/icons-material';
import { StyledBox, StyledIndicator } from './styles';


export const StyledCheckbox = () => (
  <div>
    <StyledBox defaultChecked id="c1">
      <StyledIndicator>
        <Check />
      </StyledIndicator>
    </StyledBox>
    <label htmlFor="c1">
      Presencial
    </label>
  </div>
);
