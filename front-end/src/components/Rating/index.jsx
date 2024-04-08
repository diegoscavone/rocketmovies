import { FiStar } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import { Ratings } from './styles'

export function Rating({ stars }) {
  const rating = []

  if (stars === 1) {
    rating.push(<AiFillStar />, <FiStar />, <FiStar />, <FiStar />, <FiStar />)
  } else if (stars === 2) {
    rating.push(
      <AiFillStar />,
      <AiFillStar />,
      <FiStar />,
      <FiStar />,
      <FiStar />
    )
  } else if (stars === 3) {
    rating.push(
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <FiStar />,
      <FiStar />
    )
  } else if (stars === 4) {
    rating.push(
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <FiStar />
    )
  } else {
    rating.push(
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />,
      <AiFillStar />
    )
  }

  return rating.map((rating, index) => <Ratings key={index}>{rating}</Ratings>)
}
