import { CREATE_NOTE, ADD_NOTE, FETCH_NOTES } from '../actions/noteActions';

const initialState = {
  title: '',
  body: '',
  notes: []
};

export default function noteReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_NOTE:
      return { ...state.notes, title: action.payload, body: action.payload };
    case ADD_NOTE:
      return { ...state, notes: [action.payload, ...state.notes] };
    case FETCH_NOTES:
      return { ...state, notes: action.payload };
    default:
      return state;
  }
}
