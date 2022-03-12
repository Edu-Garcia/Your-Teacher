import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ListCards = styled.div`
  width: 100%;
  min-height: calc(100vh - 8vh - 6rem);
  padding: 2rem;
  background-color: #E2E2E2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 2rem 1rem;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(3, 1fr);;
  }
`;