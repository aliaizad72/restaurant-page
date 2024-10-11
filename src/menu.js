export default function(element) {
  const title = document.createElement("h2");
  title.textContent = "Menu";

  const pasta = document.createElement("h4");
  pasta.textContent = "Rick and Morty's Spaghetti";

  element.appendChild(title);
  element.appendChild(pasta);
}