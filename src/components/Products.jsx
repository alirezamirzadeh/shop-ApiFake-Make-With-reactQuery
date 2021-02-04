import { useHistory } from "react-router-dom"
import LoveButton from "./LoveButton"

export default function Products({ products, subject = "" }) {
    const { push } = useHistory()

    return products.map((product) => (
        <div className={subject + " product"} key={product.id}>
            <div className="product__box1">
                <div className="product__box11">
                    <img
                        onClick={() =>
                            push(`/product/` + product.id)
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
                            push(`/product/` + product.id)
                        }>
                        {product.title}
                    </p>
                    <br />

                    <p className="product__price">
                        ${product.price}
                    </p>
                </div>
            </div>
            <div className="product__box2">
                <LoveButton product={product} />
                <br />

                <button
                    className="product__view"
                    onClick={() =>
                        push(`/product/` + product.id)
                    }>
                    View
                </button>
            </div>
        </div>
    ))
}
