import axiosInstance from "./axiosConfig";

const token = localStorage.getItem("token")
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
};

export const createUser = async ({email, password}:{email:string; password: string}) => {
    try {
        const response = await axiosInstance.post("/users/signup", {email, password});
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async ({email, password}:{email:string; password: string}) => {
    try {
        const response = await axiosInstance.post("/users/login", {email, password});
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateWishlistResponse = async ({add, productId, userId}: {
    userId: string;
    productId: number;
    add: boolean
}) => {
    try {
        const response = await axiosInstance.post('/users/updateWishlist', { add, productId, userId }, { headers });
        return response.data;
    } catch (error) {
        console.error('Error removing product from cart:', error);
        throw error;
    }
};

export const fetchWishlistResponse = async () => {
    try {
        const response = await axiosInstance.get('/users/fetchWishlist', { headers });
        return response.data;
    } catch (error) {
        console.error('Error removing product from cart:', error);
        throw error;
    }
};