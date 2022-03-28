import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  min-height: 50rem;
  background-color: #fff;
  box-shadow: 0.5px 0.5px 5px black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const ImageCard = styled.div`
  width: 100%;
  height: 20rem;
  background-color: #c0c0c0;
  border: 1px solid #8A8282;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 6rem;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-position: center center;
    object-fit: cover;
  }
`;

export const DetailsCard = styled.div`
  width: 100%;
  height: 100%;
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
      font-weight: 500;
      height: 100%;
      padding: 1rem;
    }
    
    &.local_atendimento {
      font-size: 1.8rem;
      padding: 0.5rem 1rem 0.25rem 1rem;
      text-align: center;
    }
    &.tipo_atendimento {
      font-size: 1.8rem;
      padding: 0.25rem 1rem 0.5rem 1rem;
      text-align: center;
    }

    &.valor {
      height: 100%;
      font-size: 2rem;
      font-weight: bold;
      padding: 1rem 1rem 0 1rem;
      color: #471779;
    }
  }
`;

export const ContactButtons = styled.div`
  width: 100%;
  color: #471779;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  button {
    width: 22rem;
    height: 5rem;
    border-radius: 1rem;
    outline: none;
    border: none;
    background-color: #fff;
    font-size: 1.8rem;
    transition: all .2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      font-size: 2.5rem;
    }

    &.email {
      border: 1px solid #471779;
      color: #471779;
    }

    &.whatsapp {
      border: 1px solid #4CAF50;
      color: #4CAF50;
    }
    
    &.delete {
      border: 1px solid #fc4a41;
      color: #fc4a41;
    }

    :hover {
      &.email {
        background-color: #471779;
        color: #fff;
      }

      &.whatsapp {
        background-color: #4CAF50;
        color: #fff;
      }
      
      &.delete {
        background-color: #fc4a41;
        color: #fff;
      }
    }
  }
`;