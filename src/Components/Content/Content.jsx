import './Content.css';
import React, { useEffect, useState } from 'react';

const defaultCards = [
  {
    id: 1,
    image: 'Whywe1.jpg',
    title: 'Підтвердження професіоналізму та якості',
    desc: 'Ми постійно вдосконалюємо свої навички...',
    actionLink: 'https://www.instagram.com/royalskin_rivne/',
    actionText: 'Переглянути',
  },
  {
    id: 2,
    image: 'Whywe2.jpg',
    title: 'Найсучасніше обладнання для вашої краси',
    desc: 'Відкрийте для себе можливості...',
    actionLink: 'https://www.instagram.com/royalskin_rivne/',
    actionText: 'Ознайомитись',
  },
  {
    id: 3,
    image: 'micronid_photo.jpg',
    title: 'Видимий результат після першої процедури',
    desc: 'Шкіра стає гладкою...',
    actionLink: 'https://www.instagram.com/royalskin_rivne/',
    actionText: 'Результати',
  }
];

const getImage = (fileName) => {
  try {
    return require(`../../assets/${fileName}`);
  } catch (err) {
    console.error("Image not found:", fileName);
    return null;
  }
};

const Content = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('contentCards');
    if (saved) {
      setCards(JSON.parse(saved));
    } else {
      setCards(defaultCards);
    }
  }, []);

  return (
    <div id='whywe'>
      <h2 className="container-tite">ЧОМУ САМЕ МИ?</h2>
      <div className="card-container">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div
              className="image"
              style={{ backgroundImage: `url(${getImage(card.image)})` }}
            ></div>
            <div className="content">
              <a href="#">
                <span className="title">{card.title}</span>
              </a>
              <p className="desc">{card.desc}</p>
              <a className="action" href={card.actionLink} target="_blank" rel="noreferrer">
                {card.actionText}
                <span aria-hidden="true"> → </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
