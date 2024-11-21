import React from 'react';
import './VideoCard.css';

function VideoCard({ thumbnail, duration, title, views, timeAgo, category }) {
  return (
    <div className="video">
      <div className="video__thumbnail">
        <img src={thumbnail} alt={title} className="video__image" />
        <span className="video__duration">{duration}</span>
      </div>
      <h4 className="video__title">{title}</h4>
      <div className="video__info">
        <span className="video__views caption">{views}</span>
        <span className="video__category caption">{category}</span>
      </div>
    </div>
  );
}

export default VideoCard;
