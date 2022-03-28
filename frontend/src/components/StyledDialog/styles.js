import styled from 'styled-components';

export const Dialog = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  background-color: #fff;
  width: 40%;
  height: 30%;
  border-radius: 1rem;

  .header {
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    background-color: #3d2768;
    border-radius: 1rem 1rem 0 0;
    color: #fff;

    h1 {
      padding-left: 1rem;
      font-weight: 500;
    }
  }
`

export const ButtonClose = styled.button`
  width: 6rem ;
  height: 4rem ;
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
    font-size: 2rem;
    color: #fff;
  }
`

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 6rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;

  .dialogText {
    height: 100%
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    color: #474747;

    p {
      font-size: 1.8rem;
    }
  }
  
  .buttonsDialog {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;

    button {
      width: 12rem;
      height: 3.5rem;
      font-size: 1.7rem;
      background-color: transparent;
      outline: none;
      border: 1px solid black;
      border-radius: 1rem;
      transition: .2s;

      &.cancel {
        border-color: #1b0a3d;
        color: #1b0a3d;
      }
      
      &.delete {
        background-color: #3d2768;
        color: #fff;
        border: none;
      }

      :hover {
        &.delete {
          background-color: #432b72;
        }
        &.cancel {
          border-color: #3d2768;
          color: #3d2768;
        }
      }
    }
  }
`