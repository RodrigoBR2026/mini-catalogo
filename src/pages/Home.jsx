import { useState } from 'react'
import { Search } from '../components/Search'
import { Filters } from '../components/Filters'
import { ProductList } from '../components/Product-list'
import { useProducts } from '../hooks/Use-products'

export function Home() {
    const [query, setQuery] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const {data, loading, error} = useProducts()

    if(loading) return <p>Carregando...</p>
    if(error) return <p>Deu Erro: {error}</p>
  
    const filtered = data.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
    .filter(product => minPrice === '' || product.price >= Number(minPrice))
    .filter(product => maxPrice === '' || product.price <= Number(maxPrice))

    return(
        <div>
            <Search value={query} onChange={setQuery}/>
            <Filters minPrice={minPrice} maxPrice={maxPrice} onMinPriceChange={setMinPrice} onMaxPriceChange={setMaxPrice}/>
            <ProductList products={filtered}/>
        </div>
    )
}