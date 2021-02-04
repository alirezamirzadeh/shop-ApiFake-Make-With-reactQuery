import { useCartAction } from "../context/CartProvider"
import ImageDelete from "../static/images/delete.svg"
export default function CounterButton({ product }) {
    const { add, decrement, remove } = useCartAction()

    const onHandler = () => {
        if (product.count > 1) {
            decrement(product.id)
        } else {
            remove(product.id)
        }
    }
    return (
        <div className="product__box--cart">
            {product.count > 1 ? (
                <button className="btn-cal" onClick={onHandler}>
                    -
                </button>
            ) : (
                <img
                    src={ImageDelete}
                    alt=""
                   
                    onClick={onHandler}
                />
            )}
            <span>{product.count}</span>

            <button
                className="btn-cal"
                onClick={() => add(product)}>
                +
            </button>
        </div>
    )
}
