import useProduct from "../hooks/useProduct"

export default function DisplayProduct({ id }) {
    const [product, onHandlerGoToCart] = useProduct(id)
    return (
        <section>
            <div className="row">
                <div key={product.id} className="a-product">
                    <img
                        src={product.image}
                        alt={product.title}
                    />
                    <p className="a-product-bold">
                        {product.title}
                    </p>
                    <p className="a-product-bold">
                        ${product.price}
                    </p>
                    <p>{product.description}</p>
                    <button
                        className="box-buy__btn"
                        onClick={onHandlerGoToCart}>
                        Add To List
                    </button>
                </div>
            </div>
        </section>
    )
}
