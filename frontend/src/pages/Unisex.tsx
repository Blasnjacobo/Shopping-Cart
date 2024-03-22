/* eslint-disable @typescript-eslint/no-unused-vars */
import { Row, Col } from 'react-bootstrap';
import Perfume from '../components/Cart/Perfume';
import usePerfumes from '../context/Perfumes/usePerfumes';
import { useState } from 'react';

const Caballero = () => {
  const { perfumes, loading } = usePerfumes();
  const [triggerEffect, setTriggerEffect] = useState(true);

  function transfer() {
    setTriggerEffect(!triggerEffect);
    console.log(triggerEffect)
  }

  return (
    <div>
      {loading ? (
        <h1></h1>
      ) : (
        <div>
          <h1 style={{ marginLeft: '1rem', textAlign: "center" }}>- Unisex -</h1>
          <iframe width="97%" height="315"
            src="https://www.youtube.com/embed/e2FvWGSSXTY?si=UkSXYBKUswWATKUU"
            style={{ display: 'block', margin: ' 2rem auto' }} />
          <h2 style={{ marginLeft: '1rem' }}>From boardgames to apparels</h2>
          <Row xs={1} md={2} lg={3} className='g-3'>
            {perfumes.filter(element => element.categoria === 'unisex').map((perfume) => (
              <Col key={perfume._id}>
                <Perfume {...(perfume)} transfer={transfer} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Caballero;
