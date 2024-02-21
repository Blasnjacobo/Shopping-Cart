import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import items from '../data/items.json'

type StoreItemProps = {
    id: number
    name: string
    price: number
    type: string
    aroma: string
    imgUrl: string
}

const Item = () => {
    const { id } = useParams<{ id: string }>()
    const [item, setItem] = useState<StoreItemProps>()

    useEffect(() => {
        if (id) {
            const selectedItem = items.find(item => item.id === parseInt(id))
            setItem(selectedItem)
        }
    }, [id])
    if (!item) {
        return <div>Loading...</div>
    }
    return (
        <div className="container">
            <div className="card mb-3" style={{ maxWidth: '90vw' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.imgUrl} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 bg-light">
                        <div className="card-body"
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-evenly", alignItems: "center", gap: "0.5rem", height: '100%' }}>
                            <div className="text-center">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text text-start" style={{ width: '70%', margin: 'auto' }}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt sit veniam, aspernatur modi enim excepturi ex ullam, dicta delectus distinctio iusto officia mollitia eius eveniet totam ad! Consequuntur, aspernatur atque.</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: "space-evenly", alignItems: "center", gap: "2rem" }}>
                                <h6>Item ID: {item.id}</h6>
                                <h6>Tipo: {item.type}</h6>
                                <h6>Precio: ${item.price} MXN</h6>
                                <h6>Aroma: {item.aroma}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
