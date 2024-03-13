import React, { createContext, useContext, useState, useEffect } from 'react';
import { Cart } from '../type/Cart';

const CartContext = createContext<Cart | undefined>(undefined);

export const useCart = () => useContext(CartContext);

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [Cart, setCart] = useState<Cart | undefined>(undefined);

    useEffect(() => {
        const getCart = () => {
            fetch('http://localhost:5000/auth/login/success', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                if (response.status === 200) return response.json();
                throw new Error('Authentication has failed!');
            }).then(data => {
                console.log(data)
                setCart(data.Cart);
                const token = data.token;
                localStorage.setItem('jwtToken', token);
            }).catch(err => {
                console.log(err);
            });
        };
        getCart();
    }, []);

    return (
        <CartContext.Provider value={Cart}>
            {children}
        </CartContext.Provider>
    );
};
