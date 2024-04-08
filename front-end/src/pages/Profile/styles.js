import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Header = styled.div`
  width: 100%;
  height: 144px;
  padding: 0 12rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  align-items: center;
`

export const Content = styled.div`
  width: 350px;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    margin-top: -100px;
  }
`

export const Form = styled.form`
  padding-top: 64px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    margin: 48px 0;
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label{
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input{
      display: none;
    }

    svg{
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`
