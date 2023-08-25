import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_nw90KoKkx08rplOu0U5nEgLcW4QWGBSMumNO4LrJsO5ceNb7MvsR0XnejQfUa856";

function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds');
}

function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
}

export { fetchBreeds, fetchCatByBreed };