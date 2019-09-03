import { CREATE_NOTE, ADD_NOTE } from '../actions/noteActions';

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
      return { ...state, notes: [...state.notes, { title: action.payload, body: action.payload }] };
    default:
      return state;
  }
}
