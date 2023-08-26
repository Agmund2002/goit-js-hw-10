import { fetchBreeds, fetchCatByBreed } from './my-modules/cat-api';
import { createMarkup, hiddenToggle } from './my-modules/helpers';
import { elements } from "./my-modules/elements";

elements.select.addEventListener('input', handlerSelect);

fetchBreeds()
    .then(response => {
        const catSelect = response.data
            .map(({ id, name }) => `<option value="${id}">${name}</option>`)
            .join('');

        elements.select.insertAdjacentHTML('beforeend', catSelect);

        hiddenToggle(elements.select);
    })
    .catch((_) => hiddenToggle(elements.err))
    .finally((_) => hiddenToggle(elements.loader));

function handlerSelect(evt) {
    fetchCatByBreed(evt.target.value)
        .then(response => {
            const { url } = response.data[0];
            const { name, description, temperament } = response.data[0].breeds[0];

            createMarkup(url, name, description, temperament);
            
            hiddenToggle(elements.box);
        })
        .catch((_) => elements.err.classList.remove("visually-hidden"))
        .finally((_) => hiddenToggle(elements.loader));
}
