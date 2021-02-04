import Header from "../components/Header"
import Products from "../components/Products"
import Ske from "../components/Ske"
import useCategory from "../hooks/useCategory"

export default function Category({ match }) {
    const products = useCategory(match.params.slug)

    return (
        <>
            <Header />
            <section>
                <div className="row">
                    <div className="products">
                        {products.length > 0 ? (
                            <Products products={products} />
                        ) : (
                            <Ske />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
} 
