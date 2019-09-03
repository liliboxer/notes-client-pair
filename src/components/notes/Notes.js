import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function Notes({ notes }) {
  const notesList = notes.map((note, i) => (
    <li key={i}>
      <Note title={note.title} body={note.body}/>
    </li>
  ));

  return <ul>{notesList}</ul>;

}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })).isRequired
};
