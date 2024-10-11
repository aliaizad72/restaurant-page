export default function (element) {
  const title = document.createElement("h2");
  const para = document.createElement("p");
  title.textContent = "Welcome to my Restaurante";
  para.textContent = "Lorep ipsum telo papat limau nipis mak kau"
  
  element.appendChild(title);
  element.appendChild(para);
}