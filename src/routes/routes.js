import HomePage from "../pages/HomePage"
import CartPage from "../pages/CartPage"
import LikePage from "../pages/LikePage"
import Category from "../pages/Category"
import Product from "../pages/Product"
// import NotFound from "../pages/NotFound"

const routes = [
    {
        exact: true,
        path: "/",
        component: HomePage
    },
    {
        path: "/cart",
        component: CartPage
    },
    {
        path: "/like",
        component: LikePage
    },
    {
        path: "/category/:slug",
        component: Category
    },
    {
        path: "/product/:id",
        component: Product
    },
    // {
    //     component: NotFound
    // }
]

export default routes
