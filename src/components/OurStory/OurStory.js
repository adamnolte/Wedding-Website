import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Harpos from './Harpos.jpg';
import Engaged from './Engaged.jpg';
import Formal from './Formal.jpg';
import Tailgating from './Tailgating.jpg';
import Chicago from './Chicago.jpg';
import TigerPlaza from './TigerPlaza.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <div className={'our-story-wrapper'} id={'OurStory'}>
      <div className={'header'}>
        Our Story
      </div>
      <Slider
        dots
        infinite
        slidesToShow={1}
        slidesToScroll={1}
        arrows
        className={'our-story-slider'}
      >
        <div>
          <div className={'our-story-slide'}>
            <div><img src={Harpos} alt={'Harpos'} /></div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lorem maximus, mattis elit sed, condimentum sem. Pellentesque vulputate tincidunt lacus ac maximus. Quisque a lectus elementum, congue ligula et, suscipit lectus. Sed dolor ex, eleifend a imperdiet posuere, dictum in velit. Duis cursus eros in erat commodo consequat. Integer rhoncus tincidunt lorem, posuere ultrices libero maximus vitae. Duis sollicitudin consequat ultricies. Etiam tincidunt lectus eget lacus cursus, blandit bibendum sapien pellentesque. Aliquam vehicula purus et vulputate dictum. Praesent ligula odio, auctor ac sagittis sed, porta nec sem.</div>
          </div>
        </div>
        <div>
          <div className={'our-story-slide'}>
            <div><img src={Tailgating} alt={'Tailgating'} /></div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lorem maximus, mattis elit sed, condimentum sem. Pellentesque vulputate tincidunt lacus ac maximus. Quisque a lectus elementum, congue ligula et, suscipit lectus. Sed dolor ex, eleifend a imperdiet posuere, dictum in velit. Duis cursus eros in erat commodo consequat. Integer rhoncus tincidunt lorem, posuere ultrices libero maximus vitae. Duis sollicitudin consequat ultricies. Etiam tincidunt lectus eget lacus cursus, blandit bibendum sapien pellentesque. Aliquam vehicula purus et vulputate dictum. Praesent ligula odio, auctor ac sagittis sed, porta nec sem.</div>
          </div>
        </div>
        <div>
          <div className={'our-story-slide'}>
          <div><img src={Formal} alt={'Formal'} /></div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lorem maximus, mattis elit sed, condimentum sem. Pellentesque vulputate tincidunt lacus ac maximus. Quisque a lectus elementum, congue ligula et, suscipit lectus. Sed dolor ex, eleifend a imperdiet posuere, dictum in velit. Duis cursus eros in erat commodo consequat. Integer rhoncus tincidunt lorem, posuere ultrices libero maximus vitae. Duis sollicitudin consequat ultricies. Etiam tincidunt lectus eget lacus cursus, blandit bibendum sapien pellentesque. Aliquam vehicula purus et vulputate dictum. Praesent ligula odio, auctor ac sagittis sed, porta nec sem.</div>
          </div>
        </div>
        <div>
          <div className={'our-story-slide'}>
            <div><img src={TigerPlaza} alt={'TigerPlaza'} /></div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lorem maximus, mattis elit sed, condimentum sem. Pellentesque vulputate tincidunt lacus ac maximus. Quisque a lectus elementum, congue ligula et, suscipit lectus. Sed dolor ex, eleifend a imperdiet posuere, dictum in velit. Duis cursus eros in erat commodo consequat. Integer rhoncus tincidunt lorem, posuere ultrices libero maximus vitae. Duis sollicitudin consequat ultricies. Etiam tincidunt lectus eget lacus cursus, blandit bibendum sapien pellentesque. Aliquam vehicula purus et vulputate dictum. Praesent ligula odio, auctor ac sagittis sed, porta nec sem.</div>
          </div>
        </div>
        <div>
          <div className={'our-story-slide'}>
            <div><img src={Engaged} alt={'Engaged'} /></div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lorem maximus, mattis elit sed, condimentum sem. Pellentesque vulputate tincidunt lacus ac maximus. Quisque a lectus elementum, congue ligula et, suscipit lectus. Sed dolor ex, eleifend a imperdiet posuere, dictum in velit. Duis cursus eros in erat commodo consequat. Integer rhoncus tincidunt lorem, posuere ultrices libero maximus vitae. Duis sollicitudin consequat ultricies. Etiam tincidunt lectus eget lacus cursus, blandit bibendum sapien pellentesque. Aliquam vehicula purus et vulputate dictum. Praesent ligula odio, auctor ac sagittis sed, porta nec sem.</div>
          </div>
        </div>
        <div>
          <div className={'our-story-slide'}>
            <div><img src={Chicago} alt={'Chicago'} /></div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lorem maximus, mattis elit sed, condimentum sem. Pellentesque vulputate tincidunt lacus ac maximus. Quisque a lectus elementum, congue ligula et, suscipit lectus. Sed dolor ex, eleifend a imperdiet posuere, dictum in velit. Duis cursus eros in erat commodo consequat. Integer rhoncus tincidunt lorem, posuere ultrices libero maximus vitae. Duis sollicitudin consequat ultricies. Etiam tincidunt lectus eget lacus cursus, blandit bibendum sapien pellentesque. Aliquam vehicula purus et vulputate dictum. Praesent ligula odio, auctor ac sagittis sed, porta nec sem.</div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default OurStory;
