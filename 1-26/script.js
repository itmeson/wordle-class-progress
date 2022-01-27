var todaysWord = pickRandomWord();


function pickRandomWord() {
  let number = Math.floor(Math.random()*words.length);
  return words[number];
}

let row = document.createElement("div");
let rowname = `row0`;
row.setAttribute("id", rowname);
row.setAttribute("class", "row");
document.getElementById("guessgrid").appendChild(row);


let input = document.createElement("div");
input.setAttribute("type", "text");
input.setAttribute("id", `00`);
input.setAttribute("class", "letterbox");
input.setAttribute("maxlength", 1);
input.setAttribute("size", 1);
document.getElementById(rowname).appendChild(input);

document.addEventListener('keydown', keyDown);

function keyDown(e) {
  let key = e.key;
  console.log(key)
  if (key.length === 1 && key.match(/[a-z]/i)) {
    document.getElementById('00').innerHTML = key;
  }
}
