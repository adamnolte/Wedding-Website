import React from 'react';
import './Accomodations.css';

const Accomodations = () => {
  return (
    <div className={'accomodations'} id={'Accomodations'}>
      <div className={'accomodations-inner'}>
        <div>
          <div className={'header'}>Accomodations</div>
          <div className={'accomodations-text'}>
            <div>Oak Brook Hills Hilton</div>
            <div>3500 Midwest Rd, Oak Brook, IL 60523</div>
            <div><a href={'tel:+16308505555'}>+1-630-850-5555</a></div>
            <div>Room Block Available - Mention Nolte/Pavich Wedding</div>
          </div>
        </div>
        <div>
          <iframe title={'Hotel Location'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.3273400123903!2d-87.97435668429112!3d41.82124897694857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4e80128e97e7%3A0x7907206e6fd07ffd!2sHilton+Chicago%2FOak+Brook+Hills+Resort+%26+Conference+Center!5e0!3m2!1sen!2sus!4v1535416623091" frameborder="0" allowfullscreen></iframe>
        </div>
        <div>
          <div className={'header'}>Things To Do</div>
          <div className={'accomodations-text'}>
            <div>
              Fuller House
              <div>Fun Place to Eat and Drink in Downtown Hinsdale</div>
            </div>
            <div>
              Oak Brook Mall
              <div>Local Shopping Mall</div>
            </div>
            <div>
              Indoor/Outdoor Pool
              <div>Make a Splash at the Large Outdoor/Indoor Pool at Hotel</div>
            </div>
            <div>
              18 Hole Golf Course at Hotel
              <div>Teetimes Available Upon Room Reservation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accomodations;
