import styled from 'styled-components';
import { Link as StyledLink } from 'react-router-dom';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px;
  & h2 {
    text-decoration: underline;
    font-size: 40px;
    color: #590d22
    
  }
  & h3{
    font-size: 24px;
    color: #590d22
  }

  & p {
    font-size: 20px;
    color: #a4133c;
    
  }
`;

export const Image = styled.img`
  margin-right: 40px;
  width: 350px;
  height: auto;
`;

export const LinkButton = styled(StyledLink)`
  button {
    cursor: pointer;
    margin: 20px;
    padding: 12px 12px;
    border: 1px solid white;
    border-radius: 6px;
    color: white;
    font-size: 24px;
    background-color: #c9184a;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    &:hover {
      background: #590d22;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0px;
  & h3 {
    display: flex;
    align-items: center;
    font-size: 28px;
    color: #590d22
  }
`;
