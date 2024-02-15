import { Row, Col } from 'react-bootstrap'
import friends from '../data/friends.json'
import StoreItem from '../components/StoreItem'

const Friends = () => {
  return (
    <div>
      <h1 style={{marginLeft:'1rem', textAlign:"center"}}>- Friends -</h1>
      <iframe width="97%" height="315" 
      src="https://www.youtube.com/embed/J3W4dz92WTI?si=3t10JBaB4budLzjC" 
      style={{display: 'block', margin:' 2rem auto'}} />
      <h2 style={{marginLeft:'1rem'}}>From boardgames to apparels</h2>
      <Row xs={1} md={2} lg={3} className='g-3'>
        {friends.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Friends