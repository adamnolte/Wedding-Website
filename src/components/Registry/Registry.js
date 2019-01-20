import React from 'react';

import AmazonLogo from './amazon-logo.png';
import CrateAndBarrelLogo from './crate-and-barrel-logo.png';

import './Registry.css';

const amazonUrl = "https://www.amazon.com/wedding/lindsay-pavich-adam-nolte-hinsdale-june-2019/registry/282S4QRZK6HI6";
const crateAndBarrelUrl = "https://www.crateandbarrel.com/gift-registry/lindsay-pavich-and-adam-nolte/r5920718";

const navigateToUrl = (url) => {
  window.open(url, '_blank');
}

const Registry = () => {
  return (
    <div className={'registry'} id="Registry">
      <div className={'header'}>
        Registry
      </div>
      <div className={'registry-wrapper'}>
        <div className={'registry-item-wrapper'}>
          <a href={amazonUrl} target="_blank" rel="noopener noreferrer">
            <img src={AmazonLogo} alt="Amazon"/>
          </a>
          <button className={'shop-button'} onClick={() => navigateToUrl(amazonUrl)}>Shop Their Registry</button>
        </div>
        <div className={'registry-item-wrapper'}>
          <a href={crateAndBarrelUrl} target="_blank" rel="noopener noreferrer">
            <img src={CrateAndBarrelLogo} alt="Crate and Barrel"/>
          </a>
          <button className={'shop-button'} onClick={() => navigateToUrl(crateAndBarrelUrl)}>
            Shop Their Registry
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registry;
