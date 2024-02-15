import { Row, Col } from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem'

const HarryPotter = () => {
  return (
    <div>
      <h1 style={{marginLeft:'1rem', textAlign:"center"}}>- Harry Potter -</h1>
      <iframe width="97%" height="315" 
      src="https://www.youtube.com/embed/RezjC4jdbTU?si=Qu5Zu8_eSrO0CgwH" 
      style={{display: 'block', margin:' 2rem auto'}}/>
      <h2 style={{marginLeft:'1rem'}}>Checkout our new collection</h2>
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

export default HarryPotter