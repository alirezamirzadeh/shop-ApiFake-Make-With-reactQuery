import { NavLink } from "react-router-dom"
import { useCartState } from "../context/CartProvider"
import like from "../static/images/heart.svg"
import shoppingCart from "../static/images/shopping-cart.svg"
import home from "../static/images/web-house-.svg"

export default function Footer() {
    const cartLength = useCartState().length
    return (
        <footer>
            <div class="row">
                <div class="footer">
                    <NavLink
                        to="/like"
                        activeClassName="active"
                        className="a-footer">
                        <img src={like} alt="" />
                        <p>like</p>
                    </NavLink>
                    <NavLink
                        to="/"
                        exact
                        activeClassName="active"
                        className="a-footer">
                        <img src={home} alt="" />
                        <p>home</p>
                    </NavLink>
                    <NavLink
                        to="/cart"
                        activeClassName="active"
                        className="a-footer">
                        <img src={shoppingCart} alt="" />
                        <p>Cart</p>
                        <span
                            className="cartLength"
                            style={
                                cartLength < 1
                                    ? { display: "none" }
                                    : {}
                            }>
                            {cartLength}
                        </span>
                    </NavLink>
                </div>
            </div>
        </footer>
    )
}
