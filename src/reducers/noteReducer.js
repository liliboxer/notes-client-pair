import { CREATE_NOTE } from '../actions/noteActions';

const initialState = {
  notes: [{ title: '', body: '' }]
};

export default function noteReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_NOTE:
      return { ...state, notes: [...state, { title: action.payload, body: action.paylload }] };
    default:
      return state;
  }
}
