import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000"
})

export const endpoint = {
    user: {
        login: "/api/users/login",
        register: "/api/users/register"
    },
    squads: "/api/squads",
    projetos: "/api/projetos",
    membros: "/api/membros/add"
}