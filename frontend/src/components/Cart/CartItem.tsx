import { useShoppingCart } from '../../context/ShoppingCartContext'
import { Button, Stack } from 'react-bootstrap'
import { formatCurrency } from '../../utilities/formatCurrency'
import { usePerfumes } from '../../context/Perfumes';

type CartItemProps = {
    id: string
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
    const { perfumes } = usePerfumes();
    const {
        removeFromCart,
        increaseCartQuantity,
        decreaseCartQuantity
    } = useShoppingCart()
    const item = perfumes.find(i => i._id === id)
    if (item == null) return null
    return (
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
                    <Button variant='outline-danger' size='sm' style={{ height: '2rem' }} onClick={() => removeFromCart(item._id)}>x</Button>
                </div>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end', gap: '0.5vw' }}>
                    <Button size='sm' style={{ fontSize: '1 vw' }} onClick={() => increaseCartQuantity(id)}>+</Button>
                    <Button size='sm' style={{ fontSize: '1 vw' }} onClick={() => decreaseCartQuantity(id)}>-</Button>
                </div>
            </div>
        </Stack>
    )
}

export default CartItem
