import Carousel from 'react-bootstrap/Carousel';
import CarruselData from '../data/carrusel.json'
import CarruselItem from './CarruselItem';

function Carrusel() {
    return (
        <Carousel nextIcon={<span style={{ color: 'black', backgroundColor: 'white' }}>Next</span>}
            prevIcon={<span style={{ color: 'black', backgroundColor: 'white' }}>Previous</span>}>
            {CarruselData.map((item) => (
                <Carousel.Item key={item.id}>
                    <div>
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