import { useHistory } from "react-router-dom"
import CounterButton from "./CounterButton"

export default function ProductsCard({products}) {
    const { push } = useHistory()

    return  products.map((product) => (
        <div className="products">
            <div
                className="product-cart product"
                key={product.id}>
                <div className="product__box1">
                    <div className="product__box11">
                        <img
                            onClick={() =>
                                push(
                                    `/product/` +
                                        product.id
                                )
                            }
                            className="product__img"
                            src={product.image}
                            alt=""
                        />
                    </div>
                    <div className="product__box12">
                        <p
                            className="product__title"
                            onClick={() =>
                                push(
                                    `/product/` +
                                        product.id
                                )
                            }>
                            {product.title}
                        </p>
                        <br />

                        <p className="product__price">
                            $
                            {(product.price *
                                product.count).toFixed(2)}
                        </p>
                    </div>
                </div>
                <div className="product__box2">
                    <CounterButton
                        product={product}
                    />
                    <br />
                    <button
                        className="product__view"
                        onClick={() =>
                            push(
                                `/product/` +
                                    product.id
                            )
                        }>
                        View
                    </button>
                </div>
            </div>
        </div>
    ))
}
