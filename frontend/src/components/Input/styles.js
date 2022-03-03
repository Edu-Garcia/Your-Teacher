import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  font-size: 2rem;

  @media (min-height: 650px) {
    font-size: 2.5rem;
  }

  label {
    display: block;
    color: #1a1a1a;
    padding-bottom: 1rem;
  }

  input {
    ::-webkit-input-placeholder{
      color: #cccccc;
    }

    width: 100%;
    height: 4rem;
    font-size: 1.8rem;
    padding: 0.5rem 1rem;
    color: #fff;
    background-color: #909090;
    border-radius: 1rem;
    border: none;
    outline: none;
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.2s;

    :hover {
      cursor: text;
      filter: brightness(105%);
      box-shadow: none;
    }
    
    :focus {
      cursor: text;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    }
  }
`