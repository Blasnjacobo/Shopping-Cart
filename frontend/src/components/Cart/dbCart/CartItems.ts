type CartItem = {
    perfumeID: string;
    quantity: number;
};

const CartItems = async (username: string): Promise<CartItem[]> => {
    try {
        if (!username) {
            console.log('User not found');
            return []
        }
        const response = await fetch(`http://localhost:5000/cart/${username}`, {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch cart from server');
        }
        const cartItems = await response.json();
        console.log(cartItems);
        return cartItems;
    } catch (error) {
        console.log('Error fetching quantity cart', error);
        throw error;
    }
};

export default CartItems;

