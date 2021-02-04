
import Ske from "./Ske"
import { useAllProducts } from "../hooks"
import Products from "./Products"


export default function DisplayProducts() {
    const { data: products, isLoading } = useAllProducts()


    return (
        <div className="products">
        {isLoading ? (
           <Ske />
        ) : (
          <Products products={products} />
        )}
    </div>
    )
}
