import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './my-modules/cat-api';

axios.defaults.headers.common["x-api-key"] = "live_nw90KoKkx08rplOu0U5nEgLcW4QWGBSMumNO4LrJsO5ceNb7MvsR0XnejQfUa856";

const select = document.querySelector('.js-breed-select');
const box = document.querySelector('.js-cat-info');

select.addEventListener('input', handlerSelect);

fetchBreeds()
    .then(response => {
        const catSelect = response.data
            .map(({ id, name }) => `<option value="${id}">${name}</option>`)
            .join('');

        select.insertAdjacentHTML('beforeend', catSelect);
    })
    .catch(error => console.log(error));

function handlerSelect(evt) {
    fetchCatByBreed(evt.target.value)
        .then(response => {
            const { url } = response.data[0];
            const { name, description, temperament } = response.data[0].breeds[0];
            createMarkup(url, name, description, temperament);
        })
        .catch(error => console.log(error));
}

function createMarkup(img, breed, description, temperament) {
    box.innerHTML = `
    <img src="${img}" alt="${breed}">
    <div>
        <h3>${breed}</h3>
        <p>${description}</p>
        <p><span>Temperament: </span>${temperament}</p>
    </div>`;
}

