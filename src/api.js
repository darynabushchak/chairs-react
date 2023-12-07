import axios from "axios";

const http = axios.create({
    baseURL: "http://127.0.0.1:3001/",
});

export default async function getChairs() {
    const response = await http.get("chairs");
    return response.data;
}

export async function getChair(id) {
    const response = await http.get(`items/${id}`);
    return response.data;
}

export async function getFilteredChair(parametr) {
    const response = await http.get(`chairs/filter?parametr=${parametr}`);
    return response.data;
}
