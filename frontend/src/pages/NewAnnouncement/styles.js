import styled from 'styled-components';

export const Container = styled.div`
  .main {
    width: 100%;
    min-height: calc(100vh - 8vh);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;

    .form {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-height: 770px) {
        height: 80%;
      }
      
      @media (min-height: 850px) {
        height: 75%;
      }

      .title {
        padding: 2rem 0;

        h1 {
          font-size: 4rem;
          font-weight: 500;
          position: relative;
          font-size: 5rem;
        }
      }

      form {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        margin-bottom: 2rem;
      }

      .submit-button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 0;

        button {
          width: 20rem;
          height: 5rem;
        }
      }
    }
  }
`