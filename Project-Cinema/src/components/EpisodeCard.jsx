import React from 'react';
import Title from './title';
import DetailsEpisode from './DetailsEpisode';

function EpisodeCard({ name, air_date, episode }) {
  return (
    <div className="card">
      <Title name={name} />
      <DetailsEpisode air_date={air_date} episode={episode} />
    </div>
  );
}

export default EpisodeCard;