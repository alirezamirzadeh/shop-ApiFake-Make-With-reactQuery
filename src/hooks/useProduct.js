import { useCartAction } from "../context/CartProvider"
import { useAllProducts } from "../hooks"
export default function useProduct(id) {
    const { data: products } = useAllProducts()

    const product = products.find(
        (product) => product.id.toString() === id
    )

    const { add } = useCartAction()

    const onHandlerGoToCart = () => {
        add(product)
    }

    return [product,onHandlerGoToCart]
}
