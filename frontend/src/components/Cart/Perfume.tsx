import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { formatCurrency } from "../../utilities/formatCurrency"
import useShoppingCart from "../../context/Cart/useShoppingCart"
import useUser from '../../context/Users/useUser';

interface StoreItemProps {
    _id: string;
    name: string;
    price: number;
    type: string;
    aroma: string;
    categoria: string;
    imgUrl: string;
    transfer: () => void
}

const Perfume = ({ _id, name, price, imgUrl, transfer }: StoreItemProps) => {
    const navigate = useNavigate();
    const user = useUser();

    const handleItem = () => {
        if (_id) {
            navigate(`/shopping-cart/${_id}`);
        }
    }

    const {
        itemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useShoppingCart()

    // Use async/await to resolve the promise
    const getQuantity = async () => {
        if (user) {
            return await itemQuantity(_id, user.username);
        }
        return 0;
    }

    // Render the component asynchronously
    const [quantity, setQuantity] = useState<number | null>(null);

    useEffect(() => {
        getQuantity().then((result) => {
            setQuantity(result);
        }).catch((error) => {
            console.error("Error fetching quantity:", error);
            setQuantity(0);
        });
    }, [increaseQuantity, decreaseQuantity, removeFromCart]);

    if (quantity === null) {
        return <div></div>;
    }

    const handleIncreaseQuantity = async () => {
        if (user) {
            await increaseQuantity(_id, user.username)
            const updatedQuantity = await getQuantity()
            await setQuantity(updatedQuantity)
        }
    }

    const handleDecreaseQuantity = async () => {
        if (user) {
            await decreaseQuantity(_id, user.username)
            const updatedQuantity = await getQuantity()
            await setQuantity(updatedQuantity)
        }
    }

    const handleRemoveFromCart = async () => {
        if (user) {
            await removeFromCart(_id, user.username)
            await transfer()
            const updatedQuantity = await getQuantity()
            await setQuantity(updatedQuantity)
        }
    }

    return (
        <Card className="h-100 m-3">
            <Card.Img
                variant="top"
                src={imgUrl}
                height='200px'
                style={{ objectFit: 'contain', marginTop: '1.5rem' }}
                onClick={() => handleItem()}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-space-between align-items-center mb-4 text-muted gap-5">
                    <span className="fs-0.5">{name}</span>
                    <span className="ms-2">{formatCurrency(price)}</span>
                </Card.Title>
                {user ? (
                    <div className="mt-auto">
                        {quantity === 0 ? (
                            <Button className="w-100" onClick={handleIncreaseQuantity}>+ Add To Card</Button>
                        ) : (
                            <div className="d-flex align-items-center flex-column" style={{ gap: '0.5rem' }}>
                                <div className="d-flex align-items-center justify-content-center" style={{ gap: '0.5rem' }}>
                                    <Button onClick={handleDecreaseQuantity}>-</Button>
                                    <div>
                                        <span className="fs-3">{quantity}</span>
                                        in cart
                                    </div>
                                    <Button onClick={handleIncreaseQuantity}>+</Button>
                                </div>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    style={{ borderRadius: 10 }}
                                    onClick={handleRemoveFromCart}
                                >Remove</Button>
                            </div>
                        )}
                    </div>
                ) : <div></div>}
            </Card.Body>
        </Card>
    );
}

export default Perfume;
