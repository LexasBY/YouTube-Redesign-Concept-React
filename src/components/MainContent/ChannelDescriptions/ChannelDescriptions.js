import React from 'react';
import './ChannelDescriptions.css';
import channelLogo from '../../../assets/imgs/orangeAvatar.jpg'

function ChannelDescriptions() {
  return (
    <div className="food-and-drink">
      <img src={channelLogo} alt="Avatar" className="author-avatar" />
      <div className="author-details">
        <h3>Food & Drink</h3>
        <p>Published on 14 Jun 2019</p>
        <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
        <p>Show more</p>
        <button className="subscribe-button">Subscribe 2.3M</button>
      </div>
    </div>
  );
}

export default ChannelDescriptions;
