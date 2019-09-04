import React from 'react';
import AddNote from '../containers/AddNote';
import AllNotes from '../containers/AllNotes';

export default function Home() {
  return (
    <>
      <AddNote />
      <AllNotes />
    </>
  );
}
