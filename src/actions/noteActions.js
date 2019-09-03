import { postNote } from '../services/noteApi';

export const CREATE_NOTE = 'CREATE_NOTE';

export const createNote = (title, body) => ({
  type: CREATE_NOTE,
  payload: { title, body }
});

export const ADD_NOTE = 'ADD_NOTE';

export const addNote = note => ({
  type: ADD_NOTE,
  //async 
  payload: postNote(note)
});
