/* eslint-disable @typescript-eslint/no-unused-vars */
import Carousel from 'react-bootstrap/Carousel';
type CarruselProps = {
    id: number
    name: string
    description: string
    price: number
    imgUrl: string
}

const CarruselItem = ({ id, name, description, price, imgUrl }: CarruselProps) => {
    return (
        <div>
            <Carousel.Caption className='bg-secondary' style={{ maxWidth: '100%', fontSize: '1rem' }}>
                <h3>{name}</h3>

            </Carousel.Caption>
            <img className="d-flex h-100 align-items-center justify-content-center bg-cover" src={imgUrl}

            />
        </div>
    )
}

export default CarruselItem;
