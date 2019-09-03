import { connect } from 'react-redux';
import Note from '../components/notes/Note';
import { getNoteById } from '../selectors/noteSelectors';


const mapStateToProps = (state, props) => ({
  note: getNoteById(state, props.match.params._id)
});

export default connect(
  mapStateToProps
)(Note);
