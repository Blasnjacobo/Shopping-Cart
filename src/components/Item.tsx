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
                    <div className="col-md-8">
                        <div className="card-body"
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-evenly", alignItems: "center", gap: "0.5rem", height: '100%' }}>
                            <div className="text-center">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text text-start">
                                    Comparte la felicidad con La Vie Est Belle, la fragancia femenina más vendida en México.

                                    El toque de refinamiento: un listón gris perlado está atado alrededor de su cuello, formando las alas de la libertad.

                                    Descubre  los diferentes aromas en la familia La Vie Est Belle, la # 1 en México.</p>
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
