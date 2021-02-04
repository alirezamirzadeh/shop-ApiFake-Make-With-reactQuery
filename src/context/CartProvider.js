import React from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const CartContext = React.createContext()
const CartContextSetState = React.createContext()

export default function CartProvider({ children }) {
    const [state, setState] = useLocalStorage("cart", [])
    return (
        <CartContext.Provider value={state}>
            <CartContextSetState.Provider value={setState}>
                {children}
            </CartContextSetState.Provider>
        </CartContext.Provider>
    )
}

function useCartState() {
    return React.useContext(CartContext)
}

function useCartSetState() {
    return React.useContext(CartContextSetState)
}

function useCartAction() {
    const setState = useCartSetState()
    const state = useCartState()

    const add = (item) => {
        if (state.find((s) => s.id === item.id)) {
            setState((preventState) =>
                preventState.map((state) => {
                    if (state.id === item.id) {
                        state.count++
                    }
                    return state
                })
            )
        } else {
            console.log("000")
            setState((preventState) => [
                ...preventState,
                { ...item, count: 1 }
            ])
        }
    }

    const decrement = (id) => {
        setState((preventState) =>
            preventState.map((state) => {
                if (state.id === id && state.count > 1) {
                    state.count--
                }
                return state
            })
        )
    }

    const remove = (id) => {
        setState((preventState) =>
            preventState.filter((state) => state.id !== id)
        )
    }

    const allPrice = () => {
        let all = 0
        state.map(s => {
            all = all + s.count * s.price
            return s
        })
        return all
    }
    const allPrices = allPrice()

    return { add, decrement ,remove ,allPrices}
}

export { useCartState, useCartSetState, useCartAction }
