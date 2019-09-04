import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from '../pages/Home';
import NoteDetail from '../containers/NoteDetail';

export default function App() {
  return (
    <Router>
      <Route path="/notes/:_id" component={NoteDetail}/>
      <Route exact path="/" component={Home}/>
    </Router>
  );
}
