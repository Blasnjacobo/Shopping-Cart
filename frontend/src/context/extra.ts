import { createContext, ReactNode, useContext, useState } from "react"
import ShoppingCart from "../components/Cart/ShoppingCart"
import TotalQuantity from "../components/Cart/dbCart/TotalQuantity"
import ItemQuantity from "../components/Cart/dbCart/ItemQuantity"
import IncreaseQuantity from "../components/Cart/dbCart/IncreaseQuantity"
import DecreaseQuantity from "../components/Cart/dbCart/DecreaseQuantity"
import RemoveFromCart from "../components/Cart/dbCart/RemoveFromCart"
import CartItems from "../components/Cart/dbCart/CartItems"

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
    increaseQuantity: (_id: string, username: string) => void
    decreaseQuantity: (_id: string, username: string) => void
    removeFromCart: (_id: string, username: string) => void
    totalQuantity: () => number
    cartItems: (username: string) => Array<CartItem>
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const totalQuantity = () => TotalQuantity()

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const itemQuantity = (_id: string) => ItemQuantity(_id)

    const increaseQuantity = (_id: string, username: string) => IncreaseQuantity(_id, username)

    const decreaseQuantity = (_id: string, username: string) => DecreaseQuantity(_id, username)

    const removeFromCart = (_id: string, username: string) => RemoveFromCart(_id, username)

    const cartItems = (username: string) => CartItems(username)

    return (
        <ShoppingCartContext.Provider
      value= {{
        itemQuantity,
            increaseQuantity,
            decreaseQuantity,
            removeFromCart,
            openCart,
            closeCart,
            cartItems,
            totalQuantity,
      }
}
    >
    { children }
    < ShoppingCart isOpen = { isOpen } />
        </ShoppingCartContext.Provider>
  )
}