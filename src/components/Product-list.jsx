import{ ProductCard } from "./Product-card"

export function ProductList({ products, onSelect }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map(product => (
                <ProductCard key={product.id} product={product} onclick={onSelect} />
            ))}
        </div>
    )
}