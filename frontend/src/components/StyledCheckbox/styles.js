import styled from 'styled-components';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

export const StyledBox = styled(CheckboxPrimitive.Root)`
  all: unset;
  background-color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;

  :hover { 
    border: 2px solid black;
  };
`;

export const StyledIndicator = styled(CheckboxPrimitive.Indicator)`
  color: red;
`;