import React from 'react';

  /*
  TODO:
  - UI with colorful vertical columns
  - bind click events
  - add midi music notes for a song
  - bind all key press events
  - test with my kids
  - publish somewhere (s3? GitHub?)
  - buy a domain name and publish
  */

const App = () => {

  return (
    <div className="App">
      <button className="Red" onClick={playNextNote}></button>
      <button className="Orange" onClick={playNextNote}></button>
      <button className="Yellow" onClick={playNextNote}></button>
      <button className="Green" onClick={playNextNote}></button>
      <button className="Blue" onClick={playNextNote}></button>
    </div>
  );
}

const playNextNote = () => {
    console.log('hi kev');
}

export default App;
