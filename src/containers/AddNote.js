import { connect } from 'react-redux';
import NoteForm from '../components/notes/NoteForm';
import { createNote, addNote } from '../actions/noteActions';

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(createNote(target.value));
  },
  handleSubmit(event, note) {
    event.preventDefault();
    dispatch(addNote(note));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NoteForm);
