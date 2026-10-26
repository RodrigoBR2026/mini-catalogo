import { useNavigate } from "react-router-dom"
import { Heart } from "lucide-react"
import { useFavorites } from '../context/Favorites-context'

export function ProductCard({ product }) {
    const navigate = useNavigate()
    const { favorites, toggleFavorite } = useFavorites()

    const isFavorite = favorites.some(item => item.id === product.id)

    function handleViewDetails() {
        navigate(`/detalhe-produto/${product.id}`)
    }

    return (
        <div className="bg-zinc-950 p-2 rounded shadow-md">
            <img className="w-full h-40 object-cover rounded" src={product.image} alt={product.name} />

            <div>
                <h2 className="mt-3 font-semibold">{product.name}</h2>
                <p className="text-zinc-300">{product.description}</p>
                <p className="font-bold">R$ {product.price.toFixed(2)}</p>
            </div>

            <div>
                <button onClick={handleViewDetails} className="mt-2 w-full bg-blue-500 text-white py-1 rounded">Ver detalhes</button>
                <button onClick={() => toggleFavorite(product)} >
                    {isFavorite ? <Heart fill='red' /> : <Heart/>}
                </button>
            </div>
        </div>
    )
}