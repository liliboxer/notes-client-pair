import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NoteForm({ handleSubmit }) {
  const [title, updateTitle] = useState('');
  const [body, updateBody] = useState('');

  return (
    <>
      <form onSubmit={event => handleSubmit(event, { title, body })}>
        <input onChange={({ target }) => updateTitle(target.value)} type="text" value={title} name="title" placeholder="title"></input>
        <textarea type="text" name="body" value={body} placeholder="type note here" onChange={({ target }) => updateBody(target.value)}></textarea>
        <button>Create Note</button>
      </form>
    </>
  );
}

NoteForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default NoteForm;
