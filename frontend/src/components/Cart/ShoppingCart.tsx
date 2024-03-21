import useShoppingCart from '../../context/Cart/useShoppingCart';
import usePerfumes from '../../context/Perfumes/usePerfumes';
import useUser from '../../context/Users/useUser';
import { formatCurrency } from '../../utilities/formatCurrency';
import { Offcanvas, Stack, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import CartItem from './CartItem';

type ShoppingCartProps = {
    isOpen: boolean;
}

interface ShoppingCartItem {
    perfumeID: string;
    quantity: number;
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart();
    const [cartItem, setCartItem] = useState<ShoppingCartItem[]>([]);
    const [triggerEffect, setTriggerEffect] = useState(false);
    const { perfumes } = usePerfumes();
    const user = useUser()
    console.log(user)

    useEffect(() => {
        const fetchCartItems = async () => {
            if (user) {
                const items = await cartItems(user.username);
                setCartItem(items);
            } else {
                setCartItem([]);
            }
        };

        fetchCartItems();
    }, [user, cartItems, triggerEffect]);

    // Function to handle sending WhatsApp message
    const sendWhatsAppMessage = () => {
        let message = "Cart Details:\n";

        cartItem?.forEach(item => {
            const storeItem = perfumes.find(i => i._id === item.perfumeID);
            if (storeItem) {
                message += `${storeItem.name}: ${item.quantity} x ${formatCurrency(storeItem.price)}\n`;
            }
        });

        const total = cartItem?.reduce((total, cartItem) => {
            const storeItem = perfumes.find(i => i._id === cartItem.perfumeID);
            return total + (storeItem?.price || 0) * cartItem.quantity;
        }, 0);

        cartItem ? message += `\nTotal: ${formatCurrency(total)}` : ''

        const whatsappURL = `https://api.whatsapp.com/send?phone=17789176729&text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };
    return (
        <Offcanvas
            show={isOpen}
            onHide={closeCart}
            placement='end'
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItem?.map(item => (
                        <CartItem key={item.perfumeID} {...item}
                            triggerEffect={triggerEffect} setTriggerEffect={setTriggerEffect} />
                    ))}
                    <div className='ms-auto fw-bold fs-5'>
                        Total {' '}
                        {formatCurrency(
                            cartItem.reduce((total, cartItem) => {
                                const item = perfumes.find(i => i._id === cartItem.perfumeID)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0)
                        )}
                    </div>
                    <Button variant="primary" onClick={sendWhatsAppMessage}>Send WhatsApp Message</Button>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default ShoppingCart;