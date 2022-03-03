import SideImage from '../../assets/study.jpg';
import styled from 'styled-components';

export const Container = styled.div`
  .main {
    width: 100%;
    height: 92vh;
    display: flex;
    overflow-y: auto;

    .image {
      width: 90%;
      background-image: url(${SideImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      box-shadow: inset 5px 0px 4px rgba(0, 0, 0, 0.25);
    }
    
    .mainForm {
      width: 110%;
      display: flex;
      justify-content: center;
      align-items: center;

      .form {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;        

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

            ::after {
              content: '';
              display: block;
              width: 2.5rem;
              height: 0.8rem;
              background-color: #782FD2;
              position: absolute;
              border-radius: 1rem;
              bottom: 0;
              left: 0.2rem;
            }
          }

          @media (min-height: 650px) {
            h1 {
              font-size: 5rem;

              ::after {
                width: 3rem;
                height: 1rem;
              }
            }
          }
        }

        form {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 2rem;
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
  }
`