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

  > h1 {
    font-size: 3.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 2.4rem;
  }
`

export const Form = styled.form`
  padding-top: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    margin: 48px 0;
  }

  > h3 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200} ;
  }

  > .input-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 4rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

    width: 100%;
    height: 56px;
    margin-top: 24px;
    border-radius: 10px;
  }

  a:hover {
    transition: filter 0.2s;
  }

  > .tags {
    display: flex;
    gap: 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    padding: 1.6rem;
    border-radius: 8px;
  }
`
