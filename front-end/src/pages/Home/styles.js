import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 1rem;
    border-radius: 50%;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.PINK};
  }

  ::-webkit-scrollbar-track-piece:end {
    background-color: transparent;
    margin-bottom: 55rem;
  }

  ::-webkit-scrollbar-track-piece:start {
    background-color: transparent;
  }
`

export const Content = styled.div`
  width: 100%;
  padding: 0 12rem;

  > .topMovies {
    display: flex;
    justify-content: space-between;
    margin: 4.7rem 0;
  }
  h1 {
    font-weight: 400;
  }

  a {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    height: 48px;
    padding: 0 16px;

    display: flex;
    align-items: center;

    border: 0;
    border-radius: 10px;

    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  &:disabled {
    opacity: 0.5;
  }
`

export const Section = styled.section`
  height: 100vh;
  overflow: auto;
  padding-right: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
`
