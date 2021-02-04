import { useLikeAction } from "../context/LikeProvider"
import ImageLikeOut from "../static/images/heart.svg"
import ImageLikeIn from "../static/images/love-in.svg"

export default function useLike(product) {
    const { add, remove, found } = useLikeAction()
    const state = found(product.id) ? ImageLikeIn : ImageLikeOut

    const onHandlerLike = () => {
        state === ImageLikeOut
            ? add(product)
            : remove(product.id)
    }
    return [state, onHandlerLike]
}
