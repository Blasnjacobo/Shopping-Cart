import { useEffect, useState } from 'react';
import { useUser } from '../../../context/User';

const ItemQuantity = (_id: string) => {
    const [itemQuantity, setItemQuantity] = useState(0);
    const user = useUser();

    useEffect(() => {
        const fetchCart = async () => {
            try {
                if (!user) {
                    console.log('User not found');
                    return;
                }
                const response = await fetch(`http://localhost:5000/cart/${user.username}/${_id}`, {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch cart from server');
                }
                const data = await response.json();
                setItemQuantity(data.totalQuantity);
            } catch (error) {
                console.log('Error fetching quantity cart', error);
            }
        };

        fetchCart();
    }, [user, _id]);

    useEffect(() => {
        // console.log(_id + ' has ' + itemQuantity + ' items');
    }, [itemQuantity]);

    return itemQuantity;
};

export default ItemQuantity;
