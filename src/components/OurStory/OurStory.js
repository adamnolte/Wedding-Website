import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Harpos from './Harpos.jpg';
import Engaged from './Engaged.jpg';
import Formal from './Formal.jpg';
import Tailgating from './Tailgating.jpg';
import Chicago from './Chicago.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <div className={'our-story-wrapper'} id={'OurStory'}>
      <div className={'image-grid'}>
        <Slider
          dots
          infinite
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          autoplay
        >
          <img src={Harpos} alt={'Harpos'} />
          <img src={Tailgating} alt={'Tailgating'} />
          <img src={Formal} alt={'Formal'} />
          <img src={Engaged} alt={'Engaged'} />
          <img src={Chicago} alt={'Chicago'} />
        </Slider>
      </div>
      <div>
        <div className={'header'}>
          Our Story
        </div>
        <div className={'our-story-text'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lorem maximus, mattis elit sed, condimentum sem. Pellentesque vulputate tincidunt lacus ac maximus. Quisque a lectus elementum, congue ligula et, suscipit lectus. Sed dolor ex, eleifend a imperdiet posuere, dictum in velit. Duis cursus eros in erat commodo consequat. Integer rhoncus tincidunt lorem, posuere ultrices libero maximus vitae. Duis sollicitudin consequat ultricies. Etiam tincidunt lectus eget lacus cursus, blandit bibendum sapien pellentesque. Aliquam vehicula purus et vulputate dictum. Praesent ligula odio, auctor ac sagittis sed, porta nec sem.
          Donec tellus nisi, dictum non tincidunt nec, dictum ac nisl. Proin erat ex, malesuada nec sapien quis, maximus posuere quam. Donec sit amet ipsum eget enim ultricies maximus. Ut imperdiet ornare nisl nec varius. Morbi hendrerit, tortor eget gravida luctus, nisi est vestibulum enim, sed semper odio purus a magna. Mauris a enim augue. Nam vehicula ante nibh, eget bibendum ante commodo non. Vestibulum ante dolor, rhoncus sit amet massa a, tristique ullamcorper dolor. Praesent malesuada est pretium tincidunt sodales. Donec quam justo, consectetur sed lectus a, gravida ultricies nibh.
        </div>
      </div>
    </div>
  );
}

export default OurStory;
