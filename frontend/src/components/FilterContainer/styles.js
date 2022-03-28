import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  background-color: #461974;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: inset 0px 1px 1px #352249;

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

export const LabelPopover = styled.label`
  display: block;
  font-size: 1.7rem;
  color: #471779;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

export const ButtonPopover = styled.button`
  width: 80%;
  display: block;
  font-size: 1.5rem;
  padding: 1rem;
  background-color: ${props => props.state ? '#471779' : '#fff'} ;
  color: ${props => props.state ? '#fff' : '#471779'} ;
  outline: none;
  border: 1px solid #2d1859;
  border-radius: 0.5rem;
  transition: all .2s;
`

export const ActiveButton = styled.button`
  width: ${props => props.width || '13rem'};
  height: 3.2rem;
  background-color: ${props => props.state ? '#fff' : '#66439B'};
  color: ${props => props.state ? '#66439B' : '#fff'};
  outline: none;
  border: none;
  border-radius: 1rem;
  transition: .2s;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
  user-select: none;
  font-size: 1.5rem;
  font-weight: ${props => props.state ? 500 : 400};;

  :hover {
    filter: brightness(110%);
  }
`