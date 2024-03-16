import { useEffect, useState } from 'react'
import { useUser } from '../../../context/User'
import { CartItem } from '../../../type/Cart'

const TotalQuantity = () => {
  const [cartById, setCartById] = useState<CartItem[] | undefined>()
  let totalQuantity = 0
  const user = useUser()
  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (!user) {
          return console.log('user not found')
        }
        const response = await fetch(`http://localhost:5000/cart/${user}`)
        if (!response.ok) {
          throw new Error('Failed to fetch cart from server')
        }
        const data = await response.json()
        setCartById(data.items)
      } catch (error) {
        console.log('Error fetching quantity cart', error)
      }
    }
    fetchCart()
  }, [])
  if (!cartById) {
    console.log('No cartById added')
  } else {
    cartById.forEach((item: CartItem) => {
      totalQuantity += item.quantity
    });
  }
  return totalQuantity
}

export default TotalQuantity
