import React from 'react';
import PropTypes from 'prop-types';

function NoteForm({ title, body, handleChange }) {
  return (
    <>
      <form>
        <input type="text" value={title} placeholder="title" onChange={handleChange}></input>
        <textarea type="text" value={body} placeholder="type note here" onChange={handleChange}></textarea>
      </form>
    </>
  );
}

NoteForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default NoteForm;
