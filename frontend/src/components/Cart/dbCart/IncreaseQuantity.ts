import { useEffect, useState } from 'react';
import { useUser } from '../../../context/User';

const IncreaseQuantity = (_id: string) => {
    const [itemQuantity, setItemQuantity] = useState(0);
    const user = useUser();
    console.log(_id)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                if (!user) {
                    console.log('User not found');
                    return;
                }
                const response = await fetch(`http://localhost:5000/cart/${user.username}/${_id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch cart from server');
                }
                const data = await response.json();
                setItemQuantity(data.quantity);
            } catch (error) {
                console.log('Error fetching quantity cart', error);
            }
        };

        fetchCart();
    }, [user, _id]);

    useEffect(() => {
        console.log(itemQuantity);
    }, [itemQuantity]);
    return itemQuantity;
};

export default IncreaseQuantity;
