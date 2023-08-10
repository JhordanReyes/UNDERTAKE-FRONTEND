import axios from "axios";
import { User } from "../models";

const BASE_URL = "http://localhost:8080/undertake/users";

export const getUsers = async() => {
    try {
        const response = await axios.get<User[]>(BASE_URL);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const addUser = async({userName, email, password}: User) => {
    try {
        return await axios.post(BASE_URL, {
            userName,
            email,
            password
        });
    } catch (error) {
        console.error(error);
    }
}

export const updateUser = async({id, userName, email}: User) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            userName,
            email
        });
    } catch (error) {
        console.error(error)
    }
}

export const deleteUser = async(id: number) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
}