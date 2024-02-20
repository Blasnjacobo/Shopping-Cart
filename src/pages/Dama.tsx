import { Row, Col } from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem'

const Dama = () => {
  return (
    <div>
      <h1 className='container-fluid' style={{
        textAlign: "center", backgroundColor: 'rgba(255, 192, 203, 0.8)'
        , color: 'white'
      }}>- Dama -</h1>
      <h3 style={{ marginLeft: '1rem', textAlign: "center" }}>Encuentra tu esencia única en cada gota</h3>
      <iframe
        width="97%"
        height="315"
        src="https://www.youtube.com/embed/e2FvWGSSXTY?si=UkSXYBKUswWATKUU"
        style={{ display: 'block', margin: '2rem auto' }}
      />
      <h2 style={{ marginLeft: '1rem' }}>Descubre nuestra nueva coleccion</h2>
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

export default Dama