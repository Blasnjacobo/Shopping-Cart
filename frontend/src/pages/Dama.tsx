/* eslint-disable @typescript-eslint/no-unused-vars */
import { Row, Col } from 'react-bootstrap';
import StoreItem from '../components/Cart/StoreItem';
import { usePerfumes } from '../context/Perfumes';

const Dama = () => {
  const { perfumes, loading } = usePerfumes();
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h1
            className='container-fluid'
            style={{
              textAlign: 'center',
              backgroundColor: 'rgba(255, 192, 203, 0.8)',
              color: 'white',
            }}>
            - Dama -
          </h1>
          <h3 style={{ marginLeft: '1rem', textAlign: 'center' }}>
            Encuentra tu esencia única en cada gota
          </h3>
          <iframe
            width='97%'
            height='315'
            src='https://www.youtube.com/embed/e2FvWGSSXTY?si=UkSXYBKUswWATKUU'
            style={{ display: 'block', margin: '2rem auto' }}></iframe>
          <h2 style={{ marginLeft: '1rem' }}>Descubre nuestra nueva coleccion</h2>
          <Row xs={1} md={2} lg={3} className='g-3'>
            {perfumes.filter(element => element.categoria === 'dama').map((perfume) => (
              <Col key={perfume._id}>
                <StoreItem {...perfume} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Dama;
