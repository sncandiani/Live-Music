import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import MusicPlayer from "./MusicPlayer"
// Render Seeker, which holds all primary navigation
ReactDOM.render(
  <Router>
    <MusicPlayer />
  </Router>,
  document.getElementById('root')
);


