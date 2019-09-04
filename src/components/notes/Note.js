import React from 'react';
import PropTypes from 'prop-types';

function Note({ note }) {
  return (
    <section>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
    </section>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired
};

export default Note;
