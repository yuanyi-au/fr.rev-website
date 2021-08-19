import React from 'react';
import './Cards.css';
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
      <h1>了解重大历史事件!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/01.jpg'
              text='巴士底狱'
              path='/'
            />
            <CardItem
              src='/images/02.jpg'
              text='断头台国王'
              path='/'
            />
            <CardItem
              src='/images/03.jpg'
              text='热月政变'
              path='/'
            />
            <CardItem
              src='/images/04.jpeg'
              text='对外战争'
              path='/'
            />
            <CardItem
              src='/images/05.jpg'
              text='旺代叛乱'
              path='/'
            />
            <CardItem
              src='/images/06.jpg'
              text='雾月政变'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
