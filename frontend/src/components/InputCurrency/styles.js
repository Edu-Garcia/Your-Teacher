import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #1a1a1a;

    &.prefix {
      padding-right: 1rem;
    }
  }

  input {
    ::-webkit-input-placeholder{
      color: #909090;
    }

    height: 4rem;
    font-size: 1.8rem;
    padding: 0.5rem 1rem;
    color: #000;
    background-color: #f0f0f0;
    border-radius: 1rem;
    border: none;
    outline: none;
    box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.25);
    transition: all 0.2s;
    width: 11rem;
    text-align: center;

    :hover {
      cursor: text;
      filter: brightness(105%);
    }
  }
`