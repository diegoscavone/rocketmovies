import styled from 'styled-components'

export const Container = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  padding: 5px 15px;
  border-radius: 8px;
  margin-right: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_60};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`
