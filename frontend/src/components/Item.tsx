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
                setPerfume(data.data);
                console.log(perfume)
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
                    <div className="col-md-4">
                        <img src={perfume.imgUrl} className="img-fluid rounded-start" alt="..." style={{ maxHeight: '500px' }} />
                    </div>
                    <div className="col-md-8 bg-light">
                        <div className="card-body"
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-evenly", alignItems: "center", gap: "0.5rem", height: '100%' }}>
                            <div className="text-center">
                                <h5 className="card-title">{perfume.name}</h5>
                                <p className="card-text text-start" style={{ width: '70%', margin: 'auto' }}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt sit veniam, aspernatur modi enim excepturi ex ullam, dicta delectus distinctio iusto officia mollitia eius eveniet totam ad! Consequuntur, aspernatur atque.</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: "space-evenly", alignItems: "center", gap: "2rem" }}>
                                <h6>perfume ID: {perfume._id}</h6>
                                <h6>Tipo: {perfume.type}</h6>
                                <h6>Precio: ${perfume.price} MXN</h6>
                                <h6>Aroma: {perfume.aroma}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item