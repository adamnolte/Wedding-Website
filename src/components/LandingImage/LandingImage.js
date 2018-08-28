import React, { Component } from 'react';
import moment from 'moment';
import './LandingImage.css';

class LandingImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: '0',
      hours: '0',
      minutes: '0',
      seconds: '0',
    };
  }

  componentDidMount = () => {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000)
  }

  updateCountdown = () => {
    const now = moment();
    const endDate = moment('06/01/2019').hours(15).minutes(0).seconds(0);
    const diff = endDate.diff(now, 'seconds')
    if (diff <= 0) {
      this.setState({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0',
      });
      return;
    }

    const dur = moment.duration(diff, 'seconds');
    this.setState({
      days: parseInt(dur.asDays(), 10),
      hours: dur.hours(),
      minutes: dur.minutes(),
      seconds: dur.seconds(),
    });
  }

  render() {
    return (
      <div className={'landing-image'}>
        <div>
          <div className={'landing-title'}>
            <div>Adam &#38; Lindsay</div>
            <div>June 1, 2019</div>
          </div>
          <div className={'landing-countdown'}>
            <div>
              {this.state.days}
              <div>days</div>
            </div>
            <div>
              {this.state.hours}
              <div>hours</div>
            </div>
            <div>
              {this.state.minutes}
              <div>minutes</div>
            </div>
            <div>
              {this.state.seconds}
              <div>seconds</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingImage;
