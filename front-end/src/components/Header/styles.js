import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  height: 116px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;

  padding: 42px 123px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 0.8rem;
    align-items: end;
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    cursor: pointer;
  }

  strong {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
export const Brand = styled.div`
  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
