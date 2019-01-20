import React from 'react';

import Person from './Person';
import Beffa from './Groomsmen/Beffa.jpg';
import Brett from './Groomsmen/Brett.jpg';
import Brian from './Groomsmen/Brian.jpg';
import Jake from './Groomsmen/Jake.PNG';
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
      title: 'Best Man - Brother of the Groom',
    },
    {
      imgSrc: Jake,
      name: 'Jacob Munson',
      title: 'Friend of Groom',
    },
    {
      imgSrc: Nick,
      name: 'Nick Meservey',
      title: 'Friend of Groom',
    },
    {
      imgSrc: Jared,
      name: 'Jared Gray',
      title: 'Friend of Groom',
    },
    {
      imgSrc: Joe,
      name: 'Joseph Eggerman',
      title: 'Friend of Groom',
    },
    {
      imgSrc: Beffa,
      name: 'Sam Beffa',
      title: 'Friend of Groom',
    },
    {
      imgSrc: Kyle,
      name: 'Kyle Bayer',
      title: 'Friend of Groom',
    },
    {
      imgSrc: Brian,
      name: 'Brian Hacker',
      title: 'Friend of Groom',
    },
  ];
  const bridesmaids = [
    {
      imgSrc: Brittany,
      name: 'Brittany Pavich',
      title: 'Maid of Honor - Sister of the Bride',
    },
    {
      imgSrc: Alyssa,
      name: 'Alyssa Pavich',
      title: 'Maid of Honor - Sister of the Bride',
    },
    {
      imgSrc: Caroline,
      name: 'Caroline Watkins',
      title: 'Friend of the Bride',
    },
    {
      imgSrc: Taylor,
      name: 'Taylor Proudfoot',
      title: 'Friend of the Bride',
    },
    {
      imgSrc: Nicole,
      name: 'Nicole Mondi',
      title: 'Cousin of the Bride',
    },
    {
      imgSrc: Jessica,
      name: 'Jessica Nolte',
      title: 'Sister of the Groom',
    },
    {
      imgSrc: Klaira,
      name: 'Klaira Ekern',
      title: 'Friend of the Bride',
    },
    {
      imgSrc: Lauren,
      name: 'Lauren Pavich',
      title: 'Cousin of the Bride',
    },
  ];
  return (
    <div className={'wedding-party'} id={'WeddingParty'}>
      <div className={'header'}>
        Bridesmaids
      </div>
      <div className={'list-of-people'}>
        {
          bridesmaids.map((bridesmaid) => {
            return (
              <Person
                key={bridesmaid.name}
                imgSrc={bridesmaid.imgSrc}
                name={bridesmaid.name}
                title={bridesmaid.title}
              />
            );
          })
        }
      </div>
      <div className={'header'}>
        Groomsmen
      </div>
      <div className={'list-of-people'}>
        {
          groomsmen.map((groomsman) => {
            return (
              <Person
                key={groomsman.name}
                imgSrc={groomsman.imgSrc}
                name={groomsman.name}
                title={groomsman.title}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default WeddingParty;
