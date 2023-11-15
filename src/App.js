import React from 'react';

function App() {
  const title = 'Computer Vision';
  return (
    <div className="App">
      <h1>{title}</h1>
      <input type='file' id='imageInput' accept='image/*' onChange={(e) => console.log(
        e.target.files[0]
      )} />
      <button onClick={() => console.log('click')}>Analize</button>
      <button onClick={() => console.log('click')}>Create</button>
    </div>
    );


}

export default App;
