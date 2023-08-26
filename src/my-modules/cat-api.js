import axios from "axios";
import { hiddenToggle } from "./helpers";
import { elements } from "./elements";

axios.defaults.headers.common["x-api-key"] = "live_nw90KoKkx08rplOu0U5nEgLcW4QWGBSMumNO4LrJsO5ceNb7MvsR0XnejQfUa856";

function fetchBreeds() {
    hiddenToggle(elements.loader);
    hiddenToggle(elements.select);
    return axios.get('https://api.thecatapi.com/v1/breeds');
}

function fetchCatByBreed(breedId) {
    elements.err.classList.add("visually-hidden");
    hiddenToggle(elements.loader);
    hiddenToggle(elements.box);
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
}

export { fetchBreeds, fetchCatByBreed };