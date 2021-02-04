import DisplayProduct from '../components/DisplayProduct'
export default function Product({ match }) {

    return (
        <section>
            <div className="row">
               <DisplayProduct id={match.params.id}/>
            </div>
        </section>
    )
}
 