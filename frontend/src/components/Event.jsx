import React, { useState, useEffect } from 'react';
import foodIcon from '../assets/food-icon.gif';
import eventIcon from '../assets/event-icon.gif';
import planningIcon from '../assets/planning-icon.gif';

function Event() {
  const [cards, setCards] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {

    fetch('http://localhost:4000/cards')
      .then((response) => response.json())
      .then((data) => {
        setCards(data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching cards:', error);
        setLoading(false);
      });
  }, []); 

  const imageMapping = {
    'The Tasty Food': foodIcon,
    'The Events': eventIcon,
    'It’s All in the Planning': planningIcon,
  };

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <section className="event-section">
      <div className="cards">
        {cards.map((card) => (
          <div className="card" key={card._id}>
            <div className="icon">
              <img src={imageMapping[card.title]} alt={`${card.title} Icon`} />
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Event;
