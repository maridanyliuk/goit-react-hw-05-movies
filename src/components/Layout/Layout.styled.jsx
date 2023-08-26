import styled from 'styled-components';
import { NavLink as StyledLink } from 'react-router-dom';

export const Link = styled(StyledLink)`
  text-decoration: none;
  margin: 12px;
  padding: 12px 12px;
  border: none;
  color: white;
  font-size: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &.active {
    border-bottom: 4px dashed white;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 40px;
  padding: 0px;
  font-size: 40px;
`;

export const Header = styled.header`
  background-color: #ff758f;
`;
