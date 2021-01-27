import { useContext, useEffect } from "react";
import Card from "../components/Card"
import { Context } from "../store/appContext";

const Starships = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getStarShips()
    }, [])
    return (
        <div className='row'>
            {
                !!store.naves && store.naves.results.length > 0 &&
                store.naves.results.map((nave, i) => {
                    return (
                        <div className='col-md-3 mb-3'>
                            <Card key={i} src={"http://placehold.it/500x700"} categoria={nave.name} src={`https://starwars-visualguide.com/assets/img/starships/${i+1}.jpg`}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Starships;