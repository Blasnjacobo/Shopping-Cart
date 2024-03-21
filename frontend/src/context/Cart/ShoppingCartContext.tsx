import { createContext } from "react";

type CartItem = {
    perfumeID: string;
    quantity: number;
};

type ShoppingCart = {
    openCart: () => void;
    closeCart: () => void;
    itemQuantity: (_id: string, username: string) => Promise<number>;
    increaseQuantity: (_id: string, username: string) => Promise<void>;
    decreaseQuantity: (_id: string, username: string) => Promise<void>;
    removeFromCart: (_id: string, username: string) => Promise<void>;
    totalQuantity: (username: string) => Promise<number>;
    cartItems: (username: string) => Promise<CartItem[]>;
};

const ShoppingCartContext = createContext({} as ShoppingCart);
export default ShoppingCartContext;
