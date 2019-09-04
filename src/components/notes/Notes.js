import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Notes({ notes }) {
  const notesList = notes.map(({ title, _id }) => (
    <li key={_id}>
      <Link to={`/notes/${_id}`}>{title}</Link>
    </li>
  ));
  return <ul>{notesList}</ul>;
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Notes;
