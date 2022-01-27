

function pickRandomWord() {
  let randomIndex = Math.floor(Math.random() * words.length);
  return words [randomIndex];
}