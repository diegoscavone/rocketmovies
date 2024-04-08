import { Container, Content } from './styles'
import { Tag } from '../Tag'
import { Rating } from '../Rating'

export function Cards({ data, ...rest }) {
  return (
    <Container {...rest}>
      <Content>
        <h2>{data.title}</h2>
        <div>
          <Rating stars={data.rating}/>
        </div>

        <p>{data.description}</p>

        {data.tags && (
          <footer>
            {data.tags.map(tag => (
              <Tag key={tag.id} title={tag.name} />
            ))}
          </footer>
        )}
      </Content>
    </Container>
  )
}
