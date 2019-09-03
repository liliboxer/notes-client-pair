import React from 'react';
import PropTypes from 'prop-types';

function Note({ title, body }) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{body}</p>
    </section>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Note;
