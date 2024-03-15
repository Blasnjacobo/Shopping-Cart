import { useEffect, useState } from 'react';
import { useUser } from '../../../context/User';

interface IncreaseQuantityPromp {
    id: string
}

const IncreaseQuantity = ({ id }: IncreaseQuantityPromp) => {
    const [itemQuantity, setItemQuantity] = useState(0);
    const user = useUser();
    console.log(id)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                if (!user) {
                    console.log('User not found');
                    return;
                }
                const response = await fetch(`http://localhost:5000/cart/${user.username}/${id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch cart from server');
                }
                const res = await response.json();
                setItemQuantity(res.quantity);
            } catch (error) {
                console.log('Error fetching quantity cart', error);
            }
        };

        fetchCart();
    }, [user, id]);

    useEffect(() => {
        console.log(itemQuantity);
    }, [itemQuantity]);
    return (
        <div />
    )
};

export default IncreaseQuantity;