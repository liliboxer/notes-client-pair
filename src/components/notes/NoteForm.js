import React from 'react';
import PropTypes from 'prop-types';

function NoteForm({ id, title, body, handleChange, handleSubmit }) {
  return (
    <>
      <form onSubmit={event => handleSubmit(event, { title, body })}>
        <input type="text" value={title} placeholder="title" onChange={handleChange}></input>
        <textarea type="text" value={body} placeholder="type note here" onChange={handleChange}></textarea>
        <button>Create Note</button>
      </form>
    </>
  );
}

NoteForm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default NoteForm;
