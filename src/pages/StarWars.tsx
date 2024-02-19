import { Row, Col } from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem'

const StarWars = () => {
  return (
    <div>
      <h1 style={{ marginLeft: '1rem', textAlign: "center" }}>- Star Wars -</h1>
      <iframe width="97%" height="315"
        src="https://www.youtube.com/embed/wxL8bVJhXCM?si=oU0V78Xb5FPKQSMV"
        style={{ display: 'block', margin: ' 2rem auto' }} />
      <h2 style={{ marginLeft: '1rem' }}>May the force be with you as you head to hyperspace with our epic collection</h2>
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

export default StarWars