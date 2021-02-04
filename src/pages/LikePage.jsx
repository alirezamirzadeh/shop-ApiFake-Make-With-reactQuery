import React from "react"
import { useLikeState } from "../context/LikeProvider"
import Products from "../components/Products"

export default function ProfilePage() {
    const products = useLikeState()

    return (
        <section>
            <div className="row">
                <div className="products">
                    {products.length > 0 ? (
                        <Products products={products} subject="product-like"/>
                    ) : (
                        <div className="center">
                            Not Like Product
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
