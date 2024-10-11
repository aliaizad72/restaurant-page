import "./styles.css"
import home from "./home"
import menu from "./menu"
import about from "./about"

const content = document.getElementById("content");
const buttonMap = {
  home, 
  menu,
  about
}
document.body.onload = home(content);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => swapPage(e.target.textContent.toLowerCase().trim()))
})

function clearContent() {
  while (content.lastElementChild) {
    content.removeChild(content.lastElementChild)
  }
}

function swapPage(module_name) {
  clearContent();
  buttonMap[module_name](content);
}
