import useLike from "../hooks/useLike"

export default function LoveButton({ product }) {
    const [state, onHandlerLike] = useLike(product)

    return (
        <img
            onClick={onHandlerLike}
            alt=""
            src={state}
            className="product__like"
        />
    )
}
