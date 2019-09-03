import { connect } from 'react-redux';
import { getAllNotes } from '../selectors/noteSelectors';
import NoteForm from '../components/notes/NoteForm';
import { createNote } from '../actions/noteActions';

const mapStateToProps = state => ({
  notes: getAllNotes(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(createNote(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);
