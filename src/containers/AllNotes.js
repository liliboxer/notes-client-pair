import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllNotes } from '../selectors/noteSelectors';
import { fetchNotes } from '../actions/noteActions';
import Notes from '../components/notes/Notes';

class AllNotes extends Component {
  static propTypes = {
    notes: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { notes } = this.props;
    return (
      <Notes notes={notes}/>
    );
  }
}

const mapStateToProps = state => ({
  notes: getAllNotes(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllNotes);
