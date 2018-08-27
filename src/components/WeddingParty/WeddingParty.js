import React from 'react';

import Person from './Person';
import Beffa from './Groomsmen/Beffa.jpg';
import Brett from './Groomsmen/Brett.PNG';
import Brian from './Groomsmen/Brian.PNG';
import Jake from './Groomsmen/Jake.PNG';
import Jared from './Groomsmen/Jared.jpg';
import Joe from './Groomsmen/Joe.PNG';
import Kyle from './Groomsmen/Kyle.PNG';
import Nick from './Groomsmen/Nick.PNG';

import './WeddingParty.css';

const WeddingParty = () => {
  const groomsmen = [
    {
      imgSrc: Brett,
      name: 'Brett Nolte',
      title: 'Best Man',
    },
    {
      imgSrc: Jake,
      name: 'Jacob Munson',
      title: 'Groomsman',
    },
    {
      imgSrc: Nick,
      name: 'Nick Meservey',
      title: 'Groomsman',
    },
    {
      imgSrc: Jared,
      name: 'Jared Gray',
      title: 'Groomsman',
    },
    {
      imgSrc: Joe,
      name: 'Joseph Eggerman',
      title: 'Groomsman',
    },
    {
      imgSrc: Beffa,
      name: 'Sam Beffa',
      title: 'Groomsman',
    },
    {
      imgSrc: Kyle,
      name: 'Kyle Bayer',
      title: 'Groomsman',
    },
    {
      imgSrc: Brian,
      name: 'Brian Hacker',
      title: 'Groomsman',
    },
  ];
  const bridesmaids = [
    {
      imgSrc: Brett,
      name: 'Brittany Pavich',
      title: 'Maid of Honor',
    },
    {
      imgSrc: Jake,
      name: 'Alyssa Pavich',
      title: 'Maid of Honor',
    },
    {
      imgSrc: Nick,
      name: 'Caroline Watkins',
      title: 'Bridesmaid',
    },
    {
      imgSrc: Jared,
      name: 'Taylor Proudfoot',
      title: 'Bridesmaid',
    },
    {
      imgSrc: Joe,
      name: 'Nicole Mundy',
      title: 'Bridesmain',
    },
    {
      imgSrc: Beffa,
      name: 'Jessica Nolte',
      title: 'Bridesmaid',
    },
    {
      imgSrc: Kyle,
      name: 'Klaira',
      title: 'Bridesmaid',
    },
    {
      imgSrc: Brian,
      name: 'Megan Pavich',
      title: 'Bridesmaid',
    },
  ];
  return (
    <div className={'wedding-party'} id={'WeddingParty'}>
      <div className={'wedding-party-title'}>
        Wedding Party
      </div>
      <div className={'people-wrapper'}>
        <div className={'list-of-people'}>
          {
            groomsmen.map((groomsman) => {
              return (
                <Person
                  imgSrc={groomsman.imgSrc}
                  name={groomsman.name}
                  title={groomsman.title}
                />
              );
            })
          }
        </div>
        <div className={'list-of-people'}>
          {
            bridesmaids.map((bridesmaid) => {
              return (
                <Person
                  imgSrc={bridesmaid.imgSrc}
                  name={bridesmaid.name}
                  title={bridesmaid.title}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default WeddingParty;
