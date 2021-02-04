import AllProducts from "../components/AllProducts"
import Header from "../components/Header"

const HomePage = () => {
    return (
        <>
            <Header />
            <section>
                <div className="row">
                    <AllProducts />
                </div>
            </section>
        </>
    )
}

export default HomePage
