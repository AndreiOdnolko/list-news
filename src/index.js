import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { articles } from './fixtures';


render(<App articles = {articles} />, document.getElementById('root'));

