import React from 'react';
import { getRandomInt } from './utils';

  /*
  TODO:
  - [DONE] UI with colorful vertical columns
  - [DONE] bind click events
  - [DONE] add midi music notes for a song
  - [almost] bind all key press events (still need to trigger click event from html probably to get hover or active css to show up on key press)
  - Make sure styling for mobile works (specifically hover with css on mobile)
  - test with my kids
  - publish somewhere (s3? GitHub?)
  - buy a domain name and publish
  */

const App = () => {
  return (
    <div className="App" onTouchMove={touchMoveHandler}>
      <button className="Red" onClick={playC}></button>
      <button className="Orange" onClick={playD}></button>
      <button className="Yellow" onClick={playE}></button>
      <button className="Green" onClick={playF}></button>
      <button className="Blue" onClick={playG}></button>
    </div>
  );
}

const playC = () => {
  playNote('c');
  console.log('c');
}
const playD = () => {
  playNote('d');
  console.log('d');
}
const playE = () => {
  playNote('e');
  console.log('e');
}
const playF = () => {
  playNote('f');
  console.log('f');
}
const playG = () => {
  playNote('g');
  console.log('g');
}
const playRandomNote = () => {
  const randomNumber = getRandomInt(1, 5);
  switch (randomNumber) {
    case 1:
      playC();
      break;
    case 2:
      playD();
      break;
    case 3:
      playE();
      break;
    case 4:
      playF();
      break;
    case 5:
      playG();
      break;
  }
}
const playNote = (note: string) => {
  const audio = new Audio(`/piano_notes/piano-${note}.wav`);
  audio.play();
}

document.addEventListener('keydown', playRandomNote);

let mostRecentTouchedButton: Element | null;
const touchMoveHandler = (event:any) => {
  const touch = event.touches[0];
  const button = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement;
  if (button && button !== mostRecentTouchedButton) {
      console.log(button);
      button.click();
      mostRecentTouchedButton = button;
  }
};

export default App;
