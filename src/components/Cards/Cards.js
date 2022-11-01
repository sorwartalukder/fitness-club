import React, { useEffect, useState } from 'react';

const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            cards
        </div>
    );
};

export default Cards;