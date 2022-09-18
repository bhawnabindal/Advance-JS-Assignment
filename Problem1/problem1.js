function display(value) {
  document.getElementById("solve").value += value;
}
function calculator() {
  let x = document.getElementById("solve").value;
  let y = eval(x);
  document.getElementById("solve").value = x + "=" + y;
  document.getElementById("answer").value = y;
}
function clr() {
  document.getElementById("solve").value = "";
  document.getElementById("answer").value = "";
}
function backspace() {
  let screen = document.getElementById("solve").value;
  document.getElementById("solve").value = screen.substring(0, screen.length - 1);
}
