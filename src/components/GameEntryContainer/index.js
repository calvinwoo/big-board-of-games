import React from 'react';
import url from 'url';
import GameEntry from '../GameEntry';

export default () => {
  const gameId = url.parse(window.location.href, true).query['game-id'];

  return <GameEntry gameId={gameId} />;
};
