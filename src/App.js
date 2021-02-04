import RouteList from "./routes/routeList"
import "./App.scss"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouteList />
            </QueryClientProvider>
        </>
    )
}

export default App
