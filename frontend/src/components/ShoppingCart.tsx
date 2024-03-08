import { useShoppingCart } from '../context/ShoppingCartContext';
import { Offcanvas, Stack, Button } from 'react-bootstrap';
import CartItem from './CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import { usePerfumes } from '../context/Perfumes';

type ShoppingCartProps = {
    isOpen: boolean;
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart();
    const { perfumes } = usePerfumes();
    // Function to handle sending WhatsApp message
    const sendWhatsAppMessage = () => {
        let message = "Cart Details:\n";

        cartItems.forEach(item => {
            const storeItem = perfumes.find(i => i._id === item.id);
            if (storeItem) {
                message += `${storeItem.name}: ${item.quantity} x ${formatCurrency(storeItem.price)}\n`;
            }
        });

        const total = cartItems.reduce((total, cartItem) => {
            const storeItem = perfumes.find(i => i._id === cartItem.id);
            return total + (storeItem?.price || 0) * cartItem.quantity;
        }, 0);

        message += `\nTotal: ${formatCurrency(total)}`;

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
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className='ms-auto fw-bold fs-5'>
                        Total {' '}
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = perfumes.find(i => i._id === cartItem.id)
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