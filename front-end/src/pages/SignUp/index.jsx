import { useState } from 'react'

import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { api } from '../../services/api'

import { Link, useNavigate } from 'react-router-dom'

export default function SingUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp(e){
    e.preventDefault()

    if(!name || !email || !password){
      return alert('Preencha todos os campos.')
    }

    api.post('/users', {name, email, password})
    .then(() => {
      alert('Usuário cadastrado com sucesso')
      navigate('/')
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar um novo usuário.')
      }
    })

  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"  
          type="text" 
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={e => handleSignUp(e)}/>

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>

      <Background />
    </Container>
  )
}
