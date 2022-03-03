import * as Poppover from '@radix-ui/react-popover';
import styled from 'styled-components';

const { Trigger, Content } = Poppover;

export const { Root } = Poppover;

export const StyledTrigger = styled(Trigger)`
  width: ${props => props.width || '11rem'};
  height: 3.2rem;
  background-color: #66439B;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 1rem;
  transition: .2s;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
  user-select: none;
  font-size: 1.5rem;

  :hover {
    filter: brightness(110%);
  }
  
  &[data-state="open"] {
    background-color: #fff;
    color: #66439B;
  }
`;

export const StyledContent = styled(Content)`
  min-width: 12rem;
  display: flex;
  outline: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #66439B;
  
  background-color: white;
  border-radius: 0.6rem;
  padding: 0.5rem;

  box-shadow: 
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;