import React from 'react';
import { render } from 'react-dom';
import GameEntryContainer from './components/GameEntryContainer';

const contentElement = document.createElement('div');
document.body.appendChild(contentElement);
render(<GameEntryContainer />, contentElement);
