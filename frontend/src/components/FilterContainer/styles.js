import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #471779;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const ClearSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  transition: all .2s;
  user-select: none;
  cursor: pointer;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }

  :hover {
    background: rgba(102, 67, 155, 0.6);
  }

  :active {
    box-shadow: inset 0.5px 0.5px 2px black
  }
`