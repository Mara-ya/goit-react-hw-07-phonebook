import axios from "axios";

axios.defaults.baseURL = 'https://6393403f11ed187986b00f20.mockapi.io/api/v1';

export async function getContacts() {
    const response = await axios.get('/contacts');
    return response.data;
};

export async function postContacts({name, phone}) {
    const response = await axios.post('/contacts', {name, phone});
    return response.data;
};

export async function deleteContact(id) {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
}