import React from 'react';
import StIsaacs from './StIsaacs.jpg';
import Reception from './Reception.jpg';
import './EventDetails.css';

const EventDetails = () => {
  return (
    <div className={'event-details'} id={'EventDetails'}>
      <div className={'header'}>
        Event Details
      </div>
      <div className={'event-details-inner'}>
        <div>
          <img alt={'Church'} src={StIsaacs} />
          <div className={'event-details-overlay'}>
            <div>
              <div className={'overlay-title'}>Ceremony</div>
              <div>2:00 P.M.</div>
              <div>St. Isaacs Jogues</div>
              <div>306 W 4th St, Hinsdale, IL 60521</div>
            </div>
          </div>
        </div>
        <div>
          <img alt={'Oak Brook Hills'} src={Reception} />
          <div className={'event-details-overlay'}>
            <div>
              <div className={'overlay-title'}>Reception</div>
              <div>6:00 P.M.</div>
              <div>Oak Brook Hills Hilton - Marquee Tent</div>
              <div>3500 Midwest Rd, Oak Brook, IL 60523</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
