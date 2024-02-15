import { Row, Col } from 'react-bootstrap'
import breakingBad from '../data/breakingBad.json'
import StoreItem from '../components/StoreItem'

const BreakingBad = () => {
  return (
    <div>
      <h1 style={{marginLeft:'1rem', textAlign:"center"}}>- Breaking Bad -</h1>
      <iframe width="97%" height="315" 
      src="https://www.youtube.com/embed/njtfNPB-YKg?si=Ip_rQSXWwzajlWQm" 
      style={{display: 'block', margin:' 2rem auto'}}/>
      <h2 style={{marginLeft:'1rem'}}>Trending products</h2>
      <Row xs={1} md={2} lg={3} className='g-3'>
        {breakingBad.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default BreakingBad