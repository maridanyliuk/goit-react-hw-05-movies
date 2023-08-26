import styled from 'styled-components';

export const Img = styled.img`
  width: 300px;
  height: auto;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  column-gap: 10px;
  & h3 {
    font-size: 24px;
    color: #590d22
  }
  & p {
    font-size: 18px;
    color: #a4133c
  }
`;

export const ListItem = styled.li`
  width: 300px;
`;

export const NoCast = styled.p`
  margin-left: 40px;
`;
