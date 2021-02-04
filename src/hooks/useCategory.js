import React from "react"
import { useAllProducts } from "./index"

export default function useCategory(category) {
    const { data: products, isLoading } = useAllProducts()

    if (isLoading) return <section>Loading...</section>

    const items = products.filter((product) => 
         product.category === category
    )

    return items
}
