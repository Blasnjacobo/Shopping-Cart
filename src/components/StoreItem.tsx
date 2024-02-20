/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
    id: number
    name: string
    price: number
    type: string
    aroma: string
    imgUrl: string
}

const StoreItem = ({ id, name, price, type, aroma, imgUrl }: StoreItemProps) => {
    const navigate = useNavigate()

    const handleItem = () => {
        navigate(`/shopping-cart/${id}`)
    }

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()
    const quantity = getItemQuantity(id)
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
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Add To Card</Button>
                    ) :
                        <div
                            className="d-flex align-items-center flex-column" style={{ gap: '0.5rem' }}>
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ gap: '0.5rem ' }}
                            >
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span>
                                    in cart
                                </div>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button
                                variant="danger"
                                size="sm"
                                style={{ borderRadius: 10 }}
                                onClick={() => removeFromCart(id)}
                            >Remove</Button>
                        </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}

export default StoreItem
