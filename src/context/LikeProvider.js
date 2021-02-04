import React from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const LikeContext = React.createContext()
const LikeContextSetState = React.createContext()

export default function LikeProvider({ children }) {
    const [state, setState] = useLocalStorage("like", [])
    return (
        <LikeContext.Provider value={state}>
            <LikeContextSetState.Provider value={setState}>
                {children}
            </LikeContextSetState.Provider>
        </LikeContext.Provider>
    )
}

function useLikeState() {
    return React.useContext(LikeContext)
}

function useLikeSetState() {
    return React.useContext(LikeContextSetState)
}

function useLikeAction() {
    const setState = useLikeSetState()
    const state = useLikeState()

    const add = (item) => {
        setState((preventState) => [...preventState, item])
    }
    const remove = (id) => {
        setState((preventState) =>
            preventState.filter((state) => state.id !== id)
        )
    }

    const found = (id) => 
        state.find(state => state.id === id)


    return { add,remove,found }
}

export { useLikeState, useLikeSetState, useLikeAction }
