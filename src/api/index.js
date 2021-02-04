import axios from "axios"

const client = axios.create({
    baseURL: "https://fakestoreapi.com"
})

const getAllProduct = async () => {
    const { data } = await client.get("/products")
    return data
}


export { getAllProduct}
