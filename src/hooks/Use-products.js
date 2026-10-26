
import { useEffect, useState } from "react";

export function useProducts() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getProducts() {
        setLoading(true)

        await new Promise(resolve => setTimeout(resolve, 3000))
        

        try {
            const response = await fetch('http://localhost:3333/products');

            if (!response.ok) {
                throw new Error('Erro ao buscar produtos');
            }

            const products = await response.json();
            setData(products);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return {
        data,
        loading,
        error
    };
}



