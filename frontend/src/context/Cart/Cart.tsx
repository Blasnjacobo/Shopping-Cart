import { ReactNode, useState } from "react";
import ShoppingCartContext from "./ShoppingCartContext";
import Carrito from "../../components/Cart/Carrito";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export default function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  const cartItems = async (username: string) => {
    try {
      if (!username) {
        console.log('User not found');
        return [];
      }
      const response = await fetch(`http://localhost:5000/cart/${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cart from server');
      }
      const cartItems = await response.json();
      return cartItems;
    } catch (error) {
      console.log('Error fetching cart items', error);
      throw error;
    }
  };

  const totalQuantity = async (username: string) => {
    if (!username) {
      console.log('User not found');
      return 0;
    }

    try {
      const response = await fetch(`http://localhost:5000/cart/totalQuantity/${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch total quantity from server');
      }
      const total = await response.json();
      return total;
    } catch (error) {
      console.log('Error fetching total quantity', error);
      return 0;
    }
  };

  const itemQuantity = async (_id: string, username: string) => {
    try {
      if (!username) {
        console.log('User not found');
        return 0;
      }
      const response = await fetch(`http://localhost:5000/cart/itemQuantity/${username}/${_id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch item quantity from server');
      }
      const data = await response.json();
      return data.totalQuantity;
    } catch (error) {
      console.log('Error fetching item quantity', error);
      return 0;
    }
  };

  const increaseQuantity = async (_id: string, username: string) => {
    try {
      if (!username) {
        console.log('User not found');
        return;
      }
      const response = await fetch(`http://localhost:5000/cart/increase/${_id}/${username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to increase quantity on server');
      }
      const data = await response.json();
      console.log(data);
      return data;

    } catch (error) {
      console.log('Error increasing quantity', error);
    }
  };


  const decreaseQuantity = async (_id: string, username: string) => {
    try {
      if (!username) {
        console.log('User not found');
        return;
      }
      const response = await fetch(`http://localhost:5000/cart/decrease/${_id}/${username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to decrease quantity on server');
      }
      const data = response.json()
      return data
    } catch (error) {
      console.log('Error decreasing quantity', error);
    }
  };

  const removeFromCart = async (_id: string, username: string) => {
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
        throw new Error('Failed to remove item from cart on server');
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.log('Error removing item from cart', error);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        itemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        totalQuantity
      }}
    >
      {children}
      <Carrito isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
