import React from "react"
import ProductsCard from "../components/ProductsCard"
import {
    useCartAction,
    useCartState
} from "../context/CartProvider"
export default function CartPage() {
    const products = useCartState()
    const { allPrices } = useCartAction()

    return (
        <section>
            <div className="row">
                {products.length < 1 ? (
                    <div className="center">Not Item in Cart</div>
                ) : <>{
                   <ProductsCard products={products} />
                  }
                  <div className="box-buy">
                      <p className="box-buy__p">{allPrices.toFixed(2)}</p>
                      <button className="box-buy__btn">Buy</button>
                  </div>
                  </>
                }
            </div>
        </section>
    )
}
