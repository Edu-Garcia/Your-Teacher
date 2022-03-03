import HomeBackgroung from '../../assets/home_backgroung.jpg';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-image: url(${HomeBackgroung});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-family: 'Alegreya', sans-serif;
      font-weight: 500;
      text-align: center;
    }
  }

  .logo {
    flex-direction: column;
    padding-bottom: 1.5rem;
    
    p {
      font-size: 3.6rem;
      padding-top: 1rem;
    }

    img {
      width: 50%;
      padding-bottom: 1rem;
    }
  }
  
  .login-register {
    padding-top: 1.5rem;

    div {
      width: 32.5rem;
      padding: 2rem;
      flex-direction: column;

      p {
        font-size: 3rem;
        padding-bottom: 1rem
      }

      button {
        width: 19rem;
        height: 5rem;
        margin-top: 1rem;
      }
    }

    .login {
      border-right: 1px solid white;
    }
    
    .register {
      border-left: 1px solid white;
    }
    
  }

`