import { useState, useEffect } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { formatCurrency } from '../../utilities/formatCurrency';
import useShoppingCart from '../../context/Cart/useShoppingCart';
import usePerfumes from '../../context/Perfumes/usePerfumes';
import useUser from '../../context/Users/useUser';

type CartItemProps = {
    perfumeID: string;
    quantity: number;
    setTriggerEffect: (value: boolean) => void;
    triggerEffect: boolean
};

const CartItem = ({ perfumeID, quantity, setTriggerEffect, triggerEffect }: CartItemProps) => {
    const { perfumes } = usePerfumes();
    const user = useUser();
    const {
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        itemQuantity
    } = useShoppingCart();
    const [updatedQuantity, setUpdatedQuantity] = useState(quantity)

    useEffect(() => {
        setUpdatedQuantity(quantity)

    }, [quantity]);

    const item = perfumes.find(i => i._id === perfumeID);
    if (!item || !user) return null;

    const handleIncreaseQuantity = async () => {
        await increaseQuantity(perfumeID, user.username);
        const updatedQty = await itemQuantity(perfumeID, user.username);
        setUpdatedQuantity(updatedQty);
        setTriggerEffect(!triggerEffect)
    };

    const handleDecreaseQuantity = async () => {
        await decreaseQuantity(perfumeID, user.username);
        const updatedQty = await itemQuantity(perfumeID, user.username);
        setUpdatedQuantity(updatedQty);
        setTriggerEffect(!triggerEffect)
    };

    const handleRemoveFromCart = async () => {
        await removeFromCart(item._id, user.username);
        const updatedQty = await itemQuantity(perfumeID, user.username);
        setUpdatedQuantity(updatedQty);
        setTriggerEffect(!triggerEffect)
    };

    return (
        (updatedQuantity > 0) ? (
            <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                <img src={item.imgUrl} style={{ width: '125px', height: '100px', objectFit: 'cover' }} />
                <div className="me-auto">
                    <div>
                        {item.name}{' '}
                        {updatedQuantity > 1 && (
                            <span className="text-muted" style={{ fontSize: '0.9rem' }}>
                                x{updatedQuantity}
                            </span>
                        )}
                    </div>
                    <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                        {formatCurrency(item.price)}
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}>
                    <div style={{ display: 'flex', gap: '0.5vw', alignItems: 'center' }}>
                        <div>{formatCurrency(item.price * updatedQuantity)}</div>
                        <Button variant="outline-danger" size="sm" style={{ height: '2rem' }} onClick={handleRemoveFromCart}>
                            x
                        </Button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5vw' }}>
                        <Button size="sm" style={{ fontSize: '1vw' }} onClick={handleIncreaseQuantity}>
                            +
                        </Button>
                        <Button size="sm" style={{ fontSize: '1vw' }} onClick={handleDecreaseQuantity}>
                            -
                        </Button>
                    </div>
                </div>
            </Stack>) : null
    );
};

export default CartItem;
