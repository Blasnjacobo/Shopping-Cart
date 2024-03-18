const TotalQuantity = async (username: string): Promise<number> => {
  if (!username) {
    console.log('User not found');
    return 0;
  }

  try {
    const response = await fetch(`http://localhost:5000/cart/totalQuantity/${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch cart from server');
    }
    const total = await response.json();
    console.log('after: ' + total);
    return total;
  } catch (error) {
    console.log('Error fetching quantity cart', error);
    return 0;
  }
};

export default TotalQuantity;
