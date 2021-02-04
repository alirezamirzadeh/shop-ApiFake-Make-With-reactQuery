import * as api from "../api"
import { useQuery } from "react-query"

const useAllProducts = () => {
    return useQuery("products", api.getAllProduct)
}



export { useAllProducts }
