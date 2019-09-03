export const postNote = ({ title, body }) => {
  return fetch('https://alchemy-note-server.herokuapp.com/api/v1/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body }),
  })
    .then(res => {
      if(res.ok) {
        console.log('YAY'); 
      } 
      else {
        console.log('BOO');
      }
    });
};
