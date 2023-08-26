import styled from 'styled-components';
export const Img = styled.img`
  width: 300px;
  height: auto;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  list-style: none;

  li {
    width: 300px;

    object-fit: cover;
    border-radius: 2%;
    transition: transform 250ms;
    &:hover,
    &:focus {
    transform: scale(1.3);


    }
  }
  h3 {
    color: #590d22;
    font-size: 28px
  }
  a {
    text-decoration: none;
  }
`;
