import React from 'react';
import StIsaacs from './StIsaacs.jpg';
import Reception from './Reception.jpg';
import './EventDetails.css';

const EventDetails = () => {
  return (
    <div className={'event-details'} id={'EventDetails'}>
      <div>
        Ceremony
        <img alt={'Church'} src={StIsaacs} />
      </div>
      <div>
        Reception
        <img alt={'Oak Brook Hills'} src={Reception} />
      </div>
    </div>
  );
}

export default EventDetails;
