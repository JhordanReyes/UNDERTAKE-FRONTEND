import axios from "axios";
import { Product } from "../models/Product";

const BASE_URL = "http://localhost:8080/undertake/products";

export const getProducts = async() => {
    try {
        const response = await axios.get<Product[]>(BASE_URL);
    return response.data;
    } catch (error) {
        console.error(error)
        return [];
    }
}

export const getProductById = async(id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const addProduct = async({name, description, price}: Product) => {
    try {
        return await axios.post(BASE_URL, {
            name,
            description,
            price
        });
    } catch (error) {
        console.error(error);
    }
    
}

export const updateProduct = async({ id, name, description, price }: Product) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            name,
            description,
            price
        });
    } catch (error) {
        console.error(error);
    }
}

export const deleteProduct = async(id: number) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
}