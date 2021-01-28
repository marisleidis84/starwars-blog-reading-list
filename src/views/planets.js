import { useContext } from "react";
import Card from "../components/Card"
import { Context } from "../store/appContext";

const Planets = (props) => {

    const { store, actions } = useContext(Context);

    const sendIndex = (e, id) => {
        e.preventDefault();
        actions.getPlanetsProperties(id)
    }


    return (
        <>
            <div className='row'>
                {
                    !!store.planetas && store.planetas.results.length > 0 &&
                    store.planetas.results.map((planeta, i) => {
                        return (
                            <div className='col-md-3 mb-3'>
                                <Card key={i}
                                    categoria={planeta.name}
                                    src={`https://starwars-visualguide.com/assets/img/planets/${i + 1}.jpg`}
                                    sendIndex={(e) => sendIndex(e, i + 1)} />
                            </div>
                        )
                    })
                }
            </div>

            <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Informacion de {store.propiedadesPlanetas ? store.propiedadesPlanetas.name : null}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="text-left"><strong>Diameter: </strong>{(store.propiedadesPlanetas!==null) ? store.propiedadesPlanetas.diameter : null} cm</p>
                            <p className="text-left"><strong>Rotation Periodica: </strong>{store.propiedadesPlanetas ? store.propiedadesPlanetas.rotation_period : null} </p>
                            <p className="text-left"><strong>Orbital Periodica: </strong>{store.propiedadesPlanetas ? store.propiedadesPlanetas.orbital_period : null} </p>
                            <p className="text-left"><strong>Gravity: </strong>{store.propiedadesPlanetas ? store.propiedadesPlanetas.gravity : null} </p>
                            <p className="text-left"><strong>Population: </strong>{store.propiedadesPlanetas ? store.propiedadesPlanetas.population : null} </p>
                            <p className="text-left"><strong>Climate: </strong>{store.propiedadesPlanetas ? store.propiedadesPlanetas.climate : null} </p>
                            <p className="text-left"><strong>Terrain: </strong>{store.propiedadesPlanetas ? store.propiedadesPlanetas.terrain : null} </p>
                            <p className="text-left"><strong>Surface Water: </strong>{store.propiedadesPlanetas ? store.propiedadesPlanetas.surface_water : null} </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Planets;