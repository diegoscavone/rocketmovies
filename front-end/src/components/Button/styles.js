import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.PINK};

  border: 0;
  border-radius: 10px;

  font-weight: 500;

  margin-top: 24px;
  padding: 0 16px;

  &:disabled{
    opacity: 0.5;
  }
`