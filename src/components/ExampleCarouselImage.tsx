import React from 'react';
type propms = {
    text: string
}
const ExampleCarouselImage = ({ text }: propms) => {
    return (
        <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt={text}
        />
    );
}

export default ExampleCarouselImage;