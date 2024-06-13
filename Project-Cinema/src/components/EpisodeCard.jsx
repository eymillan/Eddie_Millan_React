import React from 'react';
import Title from './title';
import Details from './details';

function EpisodeCard({ name, airDate, episode }) {
  return (
    <div className="card">
      <Title name={name} />
      <Details airDate={airDate} episode={episode} />
    </div>
  );
}

export default EpisodeCard;