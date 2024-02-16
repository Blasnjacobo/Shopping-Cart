import Carousel from 'react-bootstrap/Carousel';
import CarruselData from '../data/carrusel.json'
import CarruselItem from './CarruselItem';

function Carrusel() {
    return (
        <Carousel nextIcon={<span style={{ color: 'black', backgroundColor: 'white' }}>Next</span>}
            prevIcon={<span style={{ color: 'black', backgroundColor: 'white' }}>Previous</span>}>
            {CarruselData.map((item) => (
                <Carousel.Item key={item.id} style={{ maxHeight: '80vh', maxWidth: '80vw' }}>
                    <div className="d-flex h-100 align-items-center justify-content-center">
                        <div>
                            <CarruselItem
                                id={item.id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                imgUrl={item.imgUrl}
                            />
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Carrusel;