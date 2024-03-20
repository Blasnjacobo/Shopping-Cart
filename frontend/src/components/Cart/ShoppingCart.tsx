import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import { Offcanvas, Stack, Button } from 'react-bootstrap';
import { usePerfumes } from '../../context/Perfumes';
import { useUser } from '../../context/User';
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
    const { closeCart, cartItemsBlas } = useShoppingCart();
    const [cartItems, setCartItems] = useState<ShoppingCartItem[]>([]);
    const { perfumes } = usePerfumes();
    const user = useUser()

    useEffect(() => {
        const fetchCartItems = async () => {
            if (user) {
                const items = await cartItemsBlas(user.username);
                setCartItems(items);
            } else {
                setCartItems([]);
            }
        };

        fetchCartItems();
    }, [user, cartItemsBlas]);

    console.log(cartItems)

    // Function to handle sending WhatsApp message
    const sendWhatsAppMessage = () => {
        let message = "Cart Details:\n";

        cartItems?.forEach(item => {
            const storeItem = perfumes.find(i => i._id === item.perfumeID);
            if (storeItem) {
                message += `${storeItem.name}: ${item.quantity} x ${formatCurrency(storeItem.price)}\n`;
            }
        });

        const total = cartItems?.reduce((total, cartItem) => {
            const storeItem = perfumes.find(i => i._id === cartItem.perfumeID);
            return total + (storeItem?.price || 0) * cartItem.quantity;
        }, 0);

        cartItems ? message += `\nTotal: ${formatCurrency(total)}` : ''

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
                    {cartItems?.map(item => (
                        <CartItem key={item.perfumeID} {...item} />
                    ))}
                    <div className='ms-auto fw-bold fs-5'>
                        Total {' '}
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
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