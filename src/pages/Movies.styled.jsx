import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #c9184a;
  padding: 8px;
  font-size: 24px;
  width: 300px;
  outline: 0;
  background:inherit;
  &::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #c9184a;
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 20px;
  padding: 8px 8px;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 28px;
  background-color: #c9184a;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    background: #c9184a;
  }
`;
