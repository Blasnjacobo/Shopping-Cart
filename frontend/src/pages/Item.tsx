import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

type PerfumeProps = {
    _id: string
    name: string
    price: number
    type: string
    aroma: string
    categoria: string
    imgUrl: string
}

const Item = () => {
    const [perfume, setPerfume] = useState<PerfumeProps>();
    const { _id } = useParams<{ _id: string }>()

    useEffect(() => {
        const fetchSelectByID = async () => {
            try {
                const response = await fetch(`http://localhost:5000/perfumes/${_id}`)
                if (!response.ok) {
                    throw new Error('Failed to fetch data from the server');
                }
                const data = await response.json();
                setPerfume(data);
            } catch (error) {
                console.error('Error fetching store perfumes:', error);
            }
        }
        fetchSelectByID()
    }, [_id])
    if (!perfume) {
        return <div>Loading...</div>
    }
    return (
        <div className="container">
            <div className="card mb-3" style={{ maxWidth: '90vw' }}>
                <div className="row g-0">
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <img src={perfume.imgUrl} className="rounded-start item-page" alt="..." style={{ maxHeight: '500px' }} />
                    </div>
                    <div className="col-md-7 bg-light">
                        <div className="card-body">
                            <div className="text-center">
                                <h5 className="card-title">{perfume.name}</h5>
                                <p className="card-text text-start" style={{ margin: 'auto' }}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt sit veniam, aspernatur modi enim excepturi ex ullam, dicta delectus distinctio iusto officia mollitia eius eveniet totam ad! Consequuntur, aspernatur atque.</p>
                            </div>
                            <div className="perfume-description-carrito">
                                <div>
                                    <h6>Categoria: {perfume.categoria.charAt(0).toUpperCase() + perfume.categoria.slice(1)}</h6>
                                    <h6>Tipo: {perfume.type}</h6>
                                    <h6>Aroma: {perfume.aroma}</h6>
                                    <h6 className="bg-secondary text-light p-2">Precio: ${perfume.price} MXN</h6>
                                </div>
                                <button>Añadir al carrito <i className="bi bi-cart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item