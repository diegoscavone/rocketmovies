import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { FiPlus } from 'react-icons/fi'
import { Container, Content, Section } from './styles'
import { Header } from '../../components/Header'
import { Cards } from '../../components/Cards'

import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'

export function Home() {
  const [search, setSearch] = useState('')  
  const [movies, setMovies] = useState([])

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`)
      setMovies(response.data)
    }
    fetchMovies()
  }, [search])

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Header>
      <Content>
        <div className="topMovies">
          <h1>Meus filmes</h1>
          <Link to="/new">
            <FiPlus /> Adicionar filme
          </Link>
        </div>

        <Section>
          <div>
            {movies.map(movie => (
              <Cards
                key={String(movie.id)}
                data={movie}
                onClick={() => handleDetails(movie.id)}
              ></Cards>
            ))}
          </div>
        </Section>
      </Content>
    </Container>
  )
}
