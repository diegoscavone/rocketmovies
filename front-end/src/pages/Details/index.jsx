import { Container, Content, Profile } from './styles'
import { FiArrowLeft, FiStar, FiClock } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Rating } from '../../components/Rating'

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Details() {
  const { user } = useAuth()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder

  const [data, setData] = useState()

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)
    }
    fetchMovie()
  }, [])

  return (
    <Container>
      <Header></Header>
      {data &&
      <Content>
        <Link to="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>
        <div>
          <h1>{data.title}</h1>
          <Rating stars={data.rating}/>
        </div>

        <Profile>
          <img src={avatarUrl} alt="Foto do Usuário" />
          <div>
            <span>{user.name}</span>
            <FiClock />
            {format(data.created_at, `dd/MM/yy 'às' H:mm`, ptBR)}
          </div>
        </Profile>

        { 
          data.tags && data.tags.map(tag =>(
            <Tag key={String(tag.id)} title={tag.name} />
          ))    
        } 

        <p>{data.description}</p>
      </Content>
      }
    </Container>
  )
}
