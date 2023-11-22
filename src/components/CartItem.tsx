/* eslint-disable @typescript-eslint/no-unused-vars */
import storeItems from '../data/items.json'
import storeItems2 from '../data/avengers.json'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { Button, Stack } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'

type CartItemProps = {
    id: number
    quantity: number
}

const storeItemsTotal = storeItems.concat(storeItems2)
const CartItem = ({ id, quantity } : CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = storeItemsTotal.find(i => i.id === id)
    if (item == null) return null
    return (
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
            <img 
            src={item.imgUrl} 
            style={{ width: '125px', height: '100px', objectFit:'cover'}} 
            />
            <div className='me-auto'>
                <div>
                    {item.name}{' '}
                    {quantity > 1 && (
                        <span className='text-muted' style={{ fontSize: '0.9rem'}}>
                        x{quantity}
                        </span>
                    )}
                </div>
                <div className='text-muted' style={{fontSize: '0.75rem'}}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>{formatCurrency(item.price*quantity)}</div>
            <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}

export default CartItem
