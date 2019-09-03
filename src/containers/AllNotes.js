import { connect } from 'react-redux';
import { getAllNotes } from '../selectors/noteSelectors';
import Notes from '../components/notes/Notes';

const mapStateToProps = state => ({
  notes: getAllNotes(state)
});

export default connect(
  mapStateToProps
)(Notes);
