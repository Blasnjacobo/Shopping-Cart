const RemoveFromCart = async (_id: string, username: string) => {
    console.log(username)
    try {
        if (!username) {
            console.log('User not found');
            return;
        }
        const response = await fetch(`http://localhost:5000/cart/delete/${_id}/${username}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch cart from server');
        }
    } catch (error) {
        console.log('Error fetching quantity cart increase', error);
    }
}

export default RemoveFromCart