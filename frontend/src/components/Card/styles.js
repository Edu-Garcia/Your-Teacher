import styled from 'styled-components';

export const Container = styled.div`
  width: 28rem;
  height: 40rem;
  background-color: #F4F4F4;
  border-radius: 1.5rem;
  border: 1px solid #8A8282;
  border-bottom: none;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ImageCard = styled.div`
  width: 100%;
  height: 18rem;
  background-color: #c0c0c0;
  border-radius: 1.5rem 1.5rem 0 0;
  transition: all .2s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1.5rem 1.5rem 0 0;
    object-position: center center;
    object-fit: cover;
  }
`;

export const DetailsCard = styled.div`
  width: 100%;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.nome {
      font-size: 2rem;
      padding: 1rem 1rem 0.25rem 1rem;
      height: 100%;
    }
    
    &.local_atendimento {
      font-size: 1.5rem;
      padding: 0.25rem 1rem 0.5rem 1rem;
      text-align: center;
    }

    &.valor {
      font-size: 1.8rem;
      font-weight: bold;
      padding: 0.5rem 1rem;
      color: #471779;
    }
    
    &.school_level {
      font-size: 1.4rem;
      padding: 0.5rem 1rem;
    }

    &.discipline {
      font-size: 1.4rem;
      padding: 0.5rem 1rem;
      color: #471779;
      height: 100%;

      div {
        &.tag {
          border: 1px solid rgba(71, 23, 121, 0.5);
          border-radius: 0.5rem;
          padding: 0.5rem;
        }
      }
    }
  }
`;

export const ButtonCard = styled.button`
  width: 100%;
  height: 4rem;
  color: #471779;
  background-color: transparent;
  border: none;
  outline: none;
  border-top: 1px solid #471779;
  border-bottom: 1px solid #8A8282;
  border-radius: 0 0 1.5rem 1.5rem;
  transition: .2s;

  :hover {
    background-color: #E2E2E2
  }
`;