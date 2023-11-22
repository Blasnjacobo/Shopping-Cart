import { Row, Col } from 'react-bootstrap'
import storeItems from '../data/avengers.json'
import StoreItem from '../components/StoreItem'

const About = () => {
  return (
    <div>
      <h1>Avengers Section</h1>
      <Row xs={1} md={2} lg={3} className='g-3'>
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default About