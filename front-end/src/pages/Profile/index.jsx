import { useState } from 'react'

import { Container, Content, Header, Form, Avatar } from './styles'

import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera } from 'react-icons/fi'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <Header>
        <Link to="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>
      </Header>
      <Content>
        <Form>
          <Avatar>
            <img src={avatar} alt="Foto do Usuário" />

            <label htmlFor="avatar">
              <FiCamera />

              <input id="avatar" type="file" onChange={handleChangeAvatar} />
            </label>
          </Avatar>
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Input
            placeholder="E-mail"
            type="email"
            icon={FiMail}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            placeholder="Senha atual"
            type="password"
            icon={FiLock}
            onChange={e => setPasswordOld(e.target.value)}
          />

          <Input
            placeholder="Nova Senha"
            type="password"
            icon={FiLock}
            onChange={e => setPasswordNew(e.target.value)}
          />

          <Button title="Salvar" onClick={handleUpdate} />
        </Form>
      </Content>
    </Container>
  )
}
