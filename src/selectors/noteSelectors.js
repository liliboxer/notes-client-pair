export const getAllNotes = state => state.notes.notes;

export const getNoteById = (state, _id) => {
  return state.notes.notes.filter(n => {
    return n._id === _id;
  })[0];
};
