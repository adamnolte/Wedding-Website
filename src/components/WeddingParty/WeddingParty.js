import React from 'react';

import Person from './Person';
import Beffa from './Groomsmen/Beffa.jpg';
import Brett from './Groomsmen/Brett.jpg';
import Brian from './Groomsmen/Brian.jpg';
import Jake from './Groomsmen/Jake.png';
import Jared from './Groomsmen/Jared.jpg';
import Joe from './Groomsmen/Joe.jpg';
import Kyle from './Groomsmen/Kyle.jpg';
import Nick from './Groomsmen/Nick.jpg';

import Alyssa from './Bridesmaids/Alyssa.jpg';
import Brittany from './Bridesmaids/Brittany.jpg';
import Caroline from './Bridesmaids/Caroline.jpg';
import Jessica from './Bridesmaids/Jessica.jpg';
import Klaira from './Bridesmaids/Klaira.jpg';
import Lauren from './Bridesmaids/Lauren.jpg';
import Nicole from './Bridesmaids/Nicole.jpg';
import Taylor from './Bridesmaids/Taylor.jpg';

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
      imgSrc: Brittany,
      name: 'Brittany Pavich',
      title: 'Maid of Honor',
    },
    {
      imgSrc: Alyssa,
      name: 'Alyssa Pavich',
      title: 'Maid of Honor',
    },
    {
      imgSrc: Caroline,
      name: 'Caroline Watkins',
      title: 'Bridesmaid',
    },
    {
      imgSrc: Taylor,
      name: 'Taylor Proudfoot',
      title: 'Bridesmaid',
    },
    {
      imgSrc: Nicole,
      name: 'Nicole Mundy',
      title: 'Bridesmain',
    },
    {
      imgSrc: Jessica,
      name: 'Jessica Nolte',
      title: 'Bridesmaid',
    },
    {
      imgSrc: Klaira,
      name: 'Klaira',
      title: 'Bridesmaid',
    },
    {
      imgSrc: Lauren,
      name: 'Lauren Pavich',
      title: 'Bridesmaid',
    },
  ];
  return (
    <div className={'wedding-party'} id={'WeddingParty'}>
      <div className={'header'}>
        Groomsmen
      </div>
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
      <div className={'header'}>
        Bridesmaids
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
  );
}

export default WeddingParty;
