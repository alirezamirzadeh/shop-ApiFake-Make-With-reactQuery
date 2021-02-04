import { Switch, BrowserRouter, Route } from "react-router-dom"
import routes from "./routes"
import Template from "../layout/Template"
import CartProvider from "../context/CartProvider"
import LikeProvider from "../context/LikeProvider"


const Routes = routes.map((route) => <Route {...route} />)

const RouteList = () => (
    <LikeProvider>
        <CartProvider>
            <BrowserRouter>
                <Switch>
                    <Template>
                        {Routes}
                    </Template>
                </Switch>
            </BrowserRouter>
        </CartProvider>
    </LikeProvider>
)

export default RouteList
