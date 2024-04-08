import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 10px;
  margin-bottom: 8px;

  > textarea {
    height: 274px;
    width: 100%;

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background: transparent;
    border: 0;

    resize: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
