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
      box-shadow: inset 5px 0px 4px rgba(0, 0, 0, 0.25);
    }
    
    .mainForm {
      width: 110%;
      background-color: purple;
    }
  }
`