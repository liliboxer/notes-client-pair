import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function Notes({ notes }) {
  const notesList = notes.map(({ title, body, _id }) => (
    <li key={_id}>
      <Note title={title} body={body}/>
    </li>
  ));
  return <ul>{notesList}</ul>;
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Notes;
