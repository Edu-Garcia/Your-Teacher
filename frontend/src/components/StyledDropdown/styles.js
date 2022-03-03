import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

const { Trigger, Content, Item } = DropdownMenu;

export const { Root } = DropdownMenu;

export const StyledTrigger = styled(Trigger)`
  background-color: #66439B;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 1rem;
  transition: .2s;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
  user-select: none;

  :hover {
    background: rgba(102, 67, 155, 0.6);
  }
`;

export const StyledContent = styled(Content)`
  min-width: 12rem;
  display: flex;
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

export const StyledItem = styled(Item)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  outline: none;
  padding: 1rem;
  text-align: center;
  background-color: #fff;
  color: #471779;
  font-size: 1.1rem;
  transition: all .2s;

  :focus {
    background-color: #66439B;
    color: #fff;
  }

  svg {
    margin-right: 1rem;
  }
`;