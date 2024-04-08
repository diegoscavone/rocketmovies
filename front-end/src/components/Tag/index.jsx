import { Container } from './styles'

export function Tag({ title, paragraph, ...rest }) {
  return (
    <Container {...rest}>
      {title}
      {paragraph}
    </Container>
  )
}