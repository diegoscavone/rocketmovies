import { Container, Profile, Brand } from './styles'
import { Input } from '../../components/Input'

import { Link, useNavigate } from 'react-router-dom'

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { useState } from 'react'

export function Header({ children }) {
  const { signOut, user } = useAuth()

  const navigate = useNavigate()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder

  function handleSingOut() {
    navigate('/')
    signOut()
  }
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>
      {children}
      <Profile>
        <div>
          <strong>{user.name}</strong>
          <span onClick={handleSingOut}>Sair</span>
        </div>

        <Link to="/profile">
          <img src={avatarUrl} alt="Foto do Usuário" />
        </Link>
      </Profile>
    </Container>
  )
}
