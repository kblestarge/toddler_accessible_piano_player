import React from 'react';
import Button from '@mui/material/Button';
import { getRandomInt } from './utils';

  /*
  TODO:
  - [DONE] UI with colorful vertical columns
  - [DONE] bind click events
  - [DONE] add midi music notes for a song
  - [DONE] Make sure styling for mobile works (specifically hover with css on mobile)
  - [DONE] bind all key press events
  - Desktop mode should allow click and drag to trigger other keys
  - Fix bug where on mobile if user plays too hard it freezes (probabably a memory leak problem or something...?)
  - playing a random note (keyup event) should also add the 'Active' class to the button
  - test with my kids
  - publish somewhere (s3? GitHub?)
  - buy a domain name and publish
  */

const App = () => {
  return (
    <div className="App" onTouchMove={touchMoveHandler}>
      <Button variant="contained" className="Red" onClick={playC} />
      <Button variant="contained" className="Orange" onClick={playD} />
      <Button variant="contained" className="Yellow" onClick={playE} />
      <Button variant="contained" className="Green" onClick={playF} />
      <Button variant="contained" className="Blue" onClick={playG} />
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

document.addEventListener('keyup', playRandomNote);

let mostRecentTouchedButton: Element | null;
const touchMoveHandler = (event:any) => {
  const touch = event.touches[0];
  const button = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement;
  if (button && button !== mostRecentTouchedButton) {
    console.log(button);
    // play sound
    button.click();
    // toggle Active class
    button.className += 'Acive';
    if (mostRecentTouchedButton != null){
      mostRecentTouchedButton.className = mostRecentTouchedButton?.className?.replace('Acive', '');
    }
    mostRecentTouchedButton = button;
  }
};

export default App;
