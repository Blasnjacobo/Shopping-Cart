import { useShoppingCart } from '../../context/ShoppingCartContext'
import { Button, Stack } from 'react-bootstrap'
import { formatCurrency } from '../../utilities/formatCurrency'
import { usePerfumes } from '../../context/Perfumes';
import { useUser } from '../../context/User'

type CartItemProps = {
    id: string
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
    const { perfumes } = usePerfumes();
    const user = useUser()
    const {
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
    } = useShoppingCart()
    const item = perfumes.find(i => i._id === id)
    if (item == null) return null
    return (
        user ? (
            <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
                <img
                    src={item.imgUrl}
                    style={{ width: '125px', height: '100px', objectFit: 'cover' }}
                />
                <div className='me-auto'>
                    <div>
                        {item.name}{' '}
                        {quantity > 1 && (
                            <span className='text-muted' style={{ fontSize: '0.9rem' }}>
                                x{quantity}
                            </span>
                        )}
                    </div>
                    <div className='text-muted' style={{ fontSize: '0.75rem' }}>
                        {formatCurrency(item.price)}
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}>
                    <div style={{ display: 'flex', gap: '0.5vw', alignItems: 'center' }}>
                        <div>{formatCurrency(item.price * quantity)}</div>
                        <Button variant='outline-danger' size='sm' style={{ height: '2rem' }} onClick={() => removeFromCart(item._id, user.username)}>x</Button>
                    </div>
                    <div style={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end', gap: '0.5vw' }}>
                        <Button size='sm' style={{ fontSize: '1 vw' }} onClick={() => increaseQuantity(id, user.username)}>+</Button>
                        <Button size='sm' style={{ fontSize: '1 vw' }} onClick={() => decreaseQuantity(id, user.username)}>-</Button>
                    </div>
                </div>
            </Stack>) : <div></div>
    )
}

export default CartItem
