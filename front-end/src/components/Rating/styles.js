import styled from 'styled-components'

export const Ratings = styled.div`
  display: flex;
  margin: 0.8rem 0 1.5rem 0;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  > svg:nth-child(5) {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

