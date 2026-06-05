import axios from 'axios'

export const api = axios.create({
    baseURL: "https://api.api-ninjas.com/v2/quotes",
    headers: {
        "X-Api-Key": import.meta.env.VITE_NINJAS_API_KEY
    }
})