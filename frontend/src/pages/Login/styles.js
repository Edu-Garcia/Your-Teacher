import SideImage from '../../assets/study.jpg';
import styled from 'styled-components';

export const Container = styled.div`
  .main {
    width: 100%;
    height: calc(100vh - 7rem);
    display: flex;

    .image {
      width: 90%;
      background-image: url(${SideImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      box-shadow: inset -5px 0px 4px rgba(0, 0, 0, 0.25);
    }
    
    .mainForm {
      width: 110%;
      display: flex;
      justify-content: center;
      align-items: center;

      .form {
        width: 50%;
        height: 70%;
        max-height: 50rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .title {
          h1 {
            font-size: 5rem;
            font-weight: 500;
            position: relative;
          }
        
          h1::after {
            content: '';
            display: block;
            width: 3rem;
            height: 1rem;
            background-color: #782FD2;
            position: absolute;
            border-radius: 1rem;
            bottom: 0;
          }
        }

        form {
          width: 100%;
          height: 80%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        
        .submit-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`