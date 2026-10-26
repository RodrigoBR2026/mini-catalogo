import { ProductCard } from "../components/Product-card"
import { useFavorites } from "../context/Favorites-context"

export function Favorites() {
    const { favorites } = useFavorites()
    return (
        <div>
            <h1>Favoritos</h1>
            {favorites.length === 0 ? (
                <p>Nenhum produto como favorito</p>
            ): (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {favorites.map(product => (
                        <ProductCard
                        key={product.id} product={product} />
                    ))}
                 
                </div>
            )}       
        </div>
    )
}