import { elements } from "./elements";

function createMarkup(
    img = 'http://surl.li/kmkjx',
    breed = 'cat',
    description = 'All cats are beautiful',
    temperament = 'cute, warm, playful'
) {
    elements.box.innerHTML = `
    <img class="cat-img" src="${img}" alt="${breed}">
    <div class="cat-info-box">
        <h3 class="cat-breed cat-info">${breed}</h3>
        <p class="cat-info">${description}</p>
        <p class="cat-info"><span class="bold">Temperament: </span>${temperament}</p>
    </div>`;
}

function hiddenToggle(elem) {
    elem.classList.toggle("visually-hidden");
}

export { createMarkup, hiddenToggle };