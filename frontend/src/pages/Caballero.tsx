import { Row, Col } from 'react-bootstrap'
import storeItems from '../data/friends.json'
import StoreItem from '../components/StoreItem'

const Caballero = () => {
  return (
    <div>
      <h1 style={{ marginLeft: '1rem', textAlign: "center" }}>- Caballero -</h1>
      <iframe width="97%" height="315"
        src="https://www.youtube.com/embed/e2FvWGSSXTY?si=UkSXYBKUswWATKUU"
        style={{ display: 'block', margin: ' 2rem auto' }} />
      <h2 style={{ marginLeft: '1rem' }}>There is a variety of products to choose from</h2>
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

export default Caballero