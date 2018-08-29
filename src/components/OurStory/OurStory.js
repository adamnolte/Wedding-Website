import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Harpos from './Harpos.jpg';
import Engaged from './Engaged.jpg';
import Tailgating from './Tailgating.jpg';
import Chicago from './Chicago.jpg';
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
            <div>Adam and Lindsay's story begins at one of the best college bars in the nation, Harpos. Mizzou homecoming weekend 2015, Adam was showing off his impressive dance moves to RPI Music's country hits. Adam's friend and groomsman, Nick, felt bad that such talent was alone on the dance floor. Knowing Lindsay through a mutual friend of his, Nick pursuaded (and probably paid) Lindsay to dance with Adam.</div>
          </div>
        </div>
        <div>
          <div className={'our-story-slide'}>
            <div><img src={Tailgating} alt={'Tailgating'} /></div>
            <div>Adam and Lindsay soon disovered they were neighbors. They actually had been neighbors for over year and Adam still wonders how Lindsay never noticed him sitting on the front porch with his cooler and speaker. During their senior year at Mizzou they enjoyed tailgating with friends and many more nights <s>at Harpos</s> studying at the library.</div>
          </div>
        </div>
        <div>
          <div className={'our-story-slide'}>
            <div><img src={Chicago} alt={'Chicago'} /></div>
            <div>After graduation, Lindsay had plans to move back home to Chicago. Before meeting Lindsay, Adam had already accepted a job offer in Chicago, confirming their relationship was meant to last. He quickly came to appreciate the home cooked meals and wardrobe help that being close to Lindsay's family provided him. A true home away from home. In Chicago, Adam and Lindsay continued to share their love for country music by attending almost every country concert the city has to offer.</div>
          </div>
        </div>
        <div>
          <div className={'our-story-slide'}>
            <div><img src={Engaged} alt={'Engaged'} /></div>
            <div>While visiting Adam's family for Thanksgiving, Adam and Lindsay decided to take a day trip to Mizzou's campus. Adam's mom, who had no idea what he was planning, questioned him multiple times on why they wouldn't just simply stop on their drive back to Chicago. Lindsay, knowing Adam doesn't usually like to stop for pictures was surprised when he offered to stop by the Tiger for a picture. That is when Adam proposed and his plan came to light (Adam's mom was very happy he didn't wait until after they left). After a weekend of celebrating with Adam's family, they headed back to Chicago where they continue to live happily ever after.</div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default OurStory;
