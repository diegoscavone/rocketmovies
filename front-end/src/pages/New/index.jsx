import { useState } from 'react'

import { Container, Content, Form } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/TextArea'
import { MovieItem } from '../../components/MovieItem'

import { FiArrowLeft } from 'react-icons/fi'

import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

export function New() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleNewMovie(){
    if(!title){
      return alert('Informe o Título do Filme!')
    }
    if(newTag){
      return alert('Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique no icone de + para adicionar')
    }

    api.post('/movies', {
      title,
      description,
      rating,
      tags
    })

    alert('Filme cadastrado com sucesso!')
    navigate(-1)
  }

  return (
    <Container>
      <Header></Header>
      <Content>
        <Link to="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>

        <h1>Novo Filme</h1>

        <Form>
          <div className="input-wrapper">
            <Input
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)}
            />
          </div>
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <h3>Marcadores</h3>
          <div className="tags">
            {
              tags.map((tag, index) => (
                <MovieItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <MovieItem
              isNew
              placeholder="Novo marcador"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>

          <div className="input-wrapper">
            <Link to="/">
              <a href="">Cancelar</a>
            </Link>
            <Button
              title="Salvar Alterações"
              onClick={handleNewMovie}
            />
          </div>
        </Form>
      </Content>
    </Container>
  )
}
