import { elements } from "./elements";

function createMarkup(img, breed, description, temperament) {
    elements.box.innerHTML = `
    <img src="${img}" alt="${breed}">
    <div>
        <h3>${breed}</h3>
        <p>${description}</p>
        <p><span>Temperament: </span>${temperament}</p>
    </div>`;
}

function hiddenToggle(elem) {
    elem.classList.toggle("visually-hidden");
}

export { createMarkup, hiddenToggle };