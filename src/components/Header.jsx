import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="row">
                <div className="horizontal_slider">
                    <div className="slider_container">
                        <NavLink exact to="/" activeClassName="category_root" className="item">
                         All
                        </NavLink>
                        <NavLink to="/category/men clothing" activeClassName="category_root" className="item">
                            Men Clothing
                        </NavLink>
                        <NavLink to="/category/jewelery" activeClassName="category_root" className="item">Jewelery</NavLink>
                        <NavLink to="/category/women clothing" activeClassName="category_root" className="item">
                            Women Clothing
                        </NavLink>
                        <NavLink to="/category/electronics" activeClassName="category_root" className="item">Electronics</NavLink>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}
