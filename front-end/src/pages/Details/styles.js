import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  padding: 4rem 12rem 19rem;
  overflow-y: auto;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2.4rem 0;
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 700;
    margin-right: 1.9rem;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  p{
    margin: 4rem 0;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-right: .8rem;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  }

  > div {
    display: flex;
    flex-direction: row;
    margin-right: 0.8rem;
    align-items: end;
    gap: 0.8rem;
    font-family: 'Roboto', serif;
    font-size: 1.6rem;
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_80};
  }

`
