export default function (element) {
  const title = document.createElement("h2");
  const para = document.createElement("p");
  title.textContent = "About";
  para.textContent = "+420 69 69 69"
  
  element.appendChild(title);
  element.appendChild(para);
}