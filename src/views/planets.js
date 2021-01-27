import { useContext, useEffect } from "react";
import Card from "../components/Card"
import { Context } from "../store/appContext";

const Planets =()=>{

    const {store, actions} = useContext(Context);

    useEffect(() =>{
        actions.getPlanets();
    }, [])
    return(
        <div className='row'>
            {
                !!store.planetas && store.planetas.results.length > 0 &&
                store.planetas.results.map((planeta, i) => {
                    return (
                        <div className='col-md-3 mb-3'>
                            <Card key={i} src={"http://placehold.it/500x700"} categoria={planeta.name} src={`https://starwars-visualguide.com/assets/img/planets/${i+1}.jpg`}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Planets;