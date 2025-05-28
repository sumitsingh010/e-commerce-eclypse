export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface CartItem {
    productId: string;
    quantity: number;
}