import { Row, Col } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';
import { useEffect, useState } from 'react';
import { Perfume } from '../type/Perfume';

interface Perfumes {
  perfume: Perfume;
}

const Dama = () => {
  const [dama, setDama] = useState<Perfumes[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStoreItems = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/perfumes/dama');
        if (!response.ok) {
          throw new Error('Failed to fetch data from the server');
        }
        const data = await response.json();
        setDama(data.data);
      } catch (error) {
        console.error('Error fetching store items:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStoreItems();
  }, []);

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
            {dama.map((item, index) => (
              <Col key={index}>
                <StoreItem {...item.perfume} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Dama;
