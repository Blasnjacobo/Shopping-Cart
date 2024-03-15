import { createContext, ReactNode, useContext, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import ShoppingCart from "../components/Cart/ShoppingCart"
import TotalQuantity from "../components/Cart/dbCart/TotalQuantity"
import ItemQuantity from "../components/Cart/dbCart/ItemQuantity"
import IncreaseQuantity from "../components/Cart/dbCart/IncreaseQuantity"

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: string
  quantity: number
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  itemQuantity: (_id: string) => number
  increaseQuantity: (_id: string) => void
  decreaseCartQuantity: (_id: string) => void
  removeFromCart: (_id: string) => void
  totalQuantity: () => number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )

  const totalQuantity = () => TotalQuantity()

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const itemQuantity = (_id: string) => ItemQuantity(_id)

  const increaseQuantity = (_id: string) => <IncreaseQuantity id={_id} />


  function decreaseCartQuantity(id: string) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeFromCart(id: string) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        itemQuantity,
        increaseQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        totalQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}