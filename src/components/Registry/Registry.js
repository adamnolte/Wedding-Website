import React, { useState, useCallback } from 'react';
import Modal from 'react-responsive-modal';

import AmazonLogo from './amazon-logo.png';
import CrateAndBarrelLogo from './crate-and-barrel-logo.png';

import './Registry.css';

const amazonUrl = 'https://www.amazon.com/wedding/lindsay-pavich-adam-nolte-hinsdale-june-2019/registry/282S4QRZK6HI6';
const crateAndBarrelUrl = 'https://www.crateandbarrel.com/gift-registry/lindsay-pavich-and-adam-nolte/r5920718';

const navigateToUrl = url => {
  window.open(url, '_blank');
};

const Registry = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);
  return (
    <div className={'registry'} id="Registry">
      <div className={'header'}>Registry</div>
      <div className={'registry-wrapper'}>
        <div className={'registry-item-wrapper'}>
          <a href={amazonUrl} target="_blank" rel="noopener noreferrer">
            <img src={AmazonLogo} alt="Amazon" />
          </a>
          <button className={'shop-button'} onClick={() => navigateToUrl(amazonUrl)}>
            Shop Their Registry
          </button>
        </div>
        <div className={'registry-item-wrapper'}>
          <a href={crateAndBarrelUrl} target="_blank" rel="noopener noreferrer">
            <img src={CrateAndBarrelLogo} alt="Crate and Barrel" />
          </a>
          <button className={'shop-button'} onClick={() => navigateToUrl(crateAndBarrelUrl)}>
            Shop Their Registry
          </button>
        </div>
        <div className={'registry-item-wrapper'}>
          <button className={'text-button'} onClick={toggleModal}>
            Honeymoon Fund
          </button>
          <button className={'shop-button'} onClick={toggleModal}>
            Shop Their Registry
          </button>
          <Modal open={isModalOpen} onClose={toggleModal} center>
            <div className={'honeymoon-modal'}>
              <h1>Honeymoon Fund in Hawaii</h1>
              <span className={'modal-subtitle'}>
                We will be spending our honeymoon in Hawaii on both Maui and Kauai.
              </span>
              <span className={'modal-subtitle'}>
                Please call our travel agent Peggy Morgan at <a href={'tel:+16306559462'}>630-655-9462</a> and mention
                our names to book.
              </span>
              <div>
                <h2>NAPALI COAST SUNSET CRUISE - $320</h2>
                <span>
                  There&#39;s nothing like a Kauai sunset. And there&#39;s no place better to see it than on the water.
                  Watch the colors of the coastline change as the sun sinks into the ocean; it&#39;s truly gorgeous.
                  Make sure you bring your camera on this spectacular sightseeing tour. This pure Kauai sightseeing tour
                  is for those of you who want to see the Napali Coast and do some whale watching but, are not
                  interested in snorkeling. On-board, help yourself to a delicious selection of heavy appetizers, island
                  juices, soft drinks, beer, wine, mai tais and champagne at sunset.
                </span>
              </div>
              <div>
                <h2>DRUMS OF THE PACIFIC LUAU AT THE HYATT MAUI - $260</h2>
                <span>
                  You will be welcomed with a shell lei and a Mai Tai and treated to live Hawaiian music. Right before
                  sunset you'll be reminded, by the sounding of the conch shell, to take a moment and watch the
                  exquisite sunset. Afterward comes the traditional Imu Ceremony where the roast pig is removed from an
                  underground oven. You'll then be ready to partake of the delicious luau favorites in the endless
                  buffet. An open bar and various unique desserts round out the menu. Your evening's entertainment
                  features dances and music inspired by old Hawaii and many other Polynesian Islands. It's an exciting
                  program spotlighting very talented performers.
                </span>
              </div>
              <div>
                <h2>SUNSET DINNER CRUISE - $170</h2>
                <span>
                  Experience the enchantment of a romantic dinner cruise on the Maui Princess. You'll see spectacular
                  sunset views and night lights from the islands of Molokai, Lanai and Maui, while being served
                  table-side by our friendly staff. Watch the stars come out over the ocean on our "open-air" upper
                  dining deck. Live music and dancing are featured after dinner in our air-conditioned main cabin, or
                  you can stay at your table and enjoy the rest of your evening cruise along the Maui coastline.
                </span>
              </div>
              <div>
                <h2>BIKE DOWN HALEAKALA CRATER &amp; WINE TASTING - $250</h2>
                <span>
                  Your tour will begin by coasting down the gentle slopes of Haleakala and through the Kula forests with
                  beautiful views of the Pacific Ocean and Maui landscape. This "Classic" bicycle adventure has become
                  famous the world over. Experience full bi-coastal views of the outer islands followed by a
                  spectacularly scenic ride that leads to the ranch, traversing pastures where cattle and horses graze
                  and jacaranda bloom, with panoramic views of Maui's southern coast and neighbor islands of Lanai,
                  Molokai, Mokini, and Kahoolawe in the distance.
                </span>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Registry;
