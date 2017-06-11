import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  gameId: PropTypes.string.isRequired,
};

const GameEntry = ({ gameId }) => (
  <div>
    GameID is {gameId}
  </div>
);

GameEntry.propTypes = propTypes;
export default GameEntry;
