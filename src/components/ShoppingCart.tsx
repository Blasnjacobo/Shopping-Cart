import { useShoppingCart } from '../context/ShoppingCartContext';
import { Offcanvas, Stack, Button } from 'react-bootstrap';
import CartItem from './CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import storeItems from "../data/items.json";
import storeItems2 from '../data/avengers.json';
import storeItems3 from '../data/starWars.json';

type ShoppingCartProps = {
    isOpen: boolean;
}
const storeItemsTotal = storeItems.concat(storeItems2).concat(storeItems3);
console.log(storeItemsTotal)

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart();
    console.log(cartItems)
    // Function to handle sending WhatsApp message
    const sendWhatsAppMessage = () => {
        let message = "Cart Details:\n";

        cartItems.forEach(item => {
            const storeItem = storeItemsTotal.find(i => i.id === item.id);
            if (storeItem) {
                message += `${storeItem.name}: ${item.quantity} x ${formatCurrency(storeItem.price)}\n`;
            }
        });

        const total = cartItems.reduce((total, cartItem) => {
            const storeItem = storeItemsTotal.find(i => i.id === cartItem.id);
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
                                const item = storeItemsTotal.find(i => i.id === cartItem.id)
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