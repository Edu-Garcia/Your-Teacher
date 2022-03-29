import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const AnnouncementContent = styled.div`
  width: 100%;
  min-height: calc(100vh - 8vh);
  padding: 2rem;
  background-color: #E2E2E2;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 2rem;
`

export const Info = styled.div`
  width: 75%;
  padding: 2rem;
  background-color: #fff;
  box-shadow: inset 0.5px 0.5px 2px black;

  .calendar {
    .labelCalendar {
      margin-bottom: 2rem;
    }

    div {
      padding: 0;
      font-size: 1.5rem;
    }
  }

  div {
    padding: 1rem;

    h2 {
      font-size: 2.6rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`