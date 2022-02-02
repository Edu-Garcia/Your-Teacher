import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  outline: none;
  border-radius: 1.2rem;
  box-shadow: inset -3px -3px 4px rgba(0, 0, 0, 0.21);
  font-size: 2rem;
  transition: .2s;
  
  :hover {
    filter: brightness(110%);
  }

  :active {
  transform: translateY(2px);
  box-shadow: inset 0px 3px 4px rgba(0, 0, 0, 0.21);
}
`