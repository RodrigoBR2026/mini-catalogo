export function Filters({
    minPrice, 
    maxPrice, 
    onMinPriceChange, 
    onMaxPriceChange
}) {
    return (
        <div className="flex gap-2 my-3">
            
            <input 
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
            placeholder="Preço mínimo"
            className="p-2 w-full bg-zinc-800 rounded outline-0"
            type="number"
            />

            <input 
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
            placeholder="Preço máximo"
            className="p-2 w-full bg-zinc-800 rounded outline-0"
            type="number"
            />
        </div>
    )
}
