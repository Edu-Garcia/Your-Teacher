import styled from 'styled-components';

export const Container = styled.div`
  width: 24rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #66439B;
  padding: 0.5rem;
  border-radius: 1rem;
  transition: .2s;
  
  :hover {
    filter: brightness(110%);
  }

  input {
    width: 100%;
    padding: 0 0.5rem;
    outline: none;
    border: none;
    background: transparent;
    color: #fff;
    cursor: text;

    ::-webkit-input-placeholder{
      color: #BDBDBD;
    }
  }

  svg {
    font-size: 2rem;
    margin: 0 0.5rem;
  }
`;