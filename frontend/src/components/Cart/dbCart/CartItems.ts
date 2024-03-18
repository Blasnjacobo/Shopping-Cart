import { useEffect, useState } from 'react';

const ItemQuantity = (username: string) => {
    const [cartItems, setCartItems] = useState([]);
    console.log(username)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                if (!username) {
                    console.log('User not found');
                    return;
                }
                const response = await fetch(`http://localhost:5000/cart/${username}`, {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch cart from server');
                }
                const data = await response.json();
                setCartItems(data);
            } catch (error) {
                console.log('Error fetching quantity cart', error);
            }
        };

        fetchCart();
    }, [username]);

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    return cartItems;
};

export default ItemQuantity;
