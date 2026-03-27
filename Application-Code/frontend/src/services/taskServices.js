import axios from "axios";

// Read backend URL from environment variable
const apiUrl = process.env.REACT_APP_BACKEND_URL;

console.log("API URL:", apiUrl);

// IMPORTANT: Fail fast if env is missing
if (!apiUrl) {
    throw new Error("REACT_APP_BACKEND_URL is not defined in .env file");
}

// GET all tasks
export function getTasks() {
    return axios.get(apiUrl);
}

// CREATE task
export function addTask(task) {
    return axios.post(apiUrl, task);
}

// UPDATE task
export function updateTask(id, task) {
    return axios.put(`${apiUrl}/${id}`, task);
}

// DELETE task
export function deleteTask(id) {
    return axios.delete(`${apiUrl}/${id}`);
}