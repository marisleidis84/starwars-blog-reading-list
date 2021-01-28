import { useContext, useEffect } from "react";
import Card from "../components/Card"
import { Context } from "../store/appContext";

const Starships = () => {
    const { store, actions } = useContext(Context);

    const sendIndex = (e, id) => {
        e.preventDefault();
        actions.getStarShipsProperties(id)
    }

    return (
        <>
            <div className='row'>
                {
                    !!store.naves && store.naves.results.length > 0 &&
                    store.naves.results.map((nave, i) => {
                        return (
                            <div className='col-md-3 mb-3'>
                                <Card key={i}
                                    categoria={nave.name}
                                    src={`https://starwars-visualguide.com/assets/img/starships/${i + 1}.jpg`}
                                    sendIndex={(e) => sendIndex(e, i + 1)} />
                            </div>
                        )
                    })
                }
            </div>

            <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content text-white-50" style={{"backgroundColor":"black"}}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Informacion de {store.propiedadesNaves ? store.propiedadesNaves.name : null}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body bg-dark">
                            <p className="text-left"><strong>Model: </strong>{(store.propiedadesNaves !== null) ? store.propiedadesNaves.model : null} cm</p>
                            <p className="text-left"><strong>Starship: </strong>{store.propiedadesNaves ? store.propiedadesNaves.starship_class : null} </p>
                            <p className="text-left"><strong>Manufacturer: </strong>{store.propiedadesNaves ? store.propiedadesNaves.manufacturer : null} </p>
                            <p className="text-left"><strong>Cost in Credits: </strong>{store.propiedadesNaves ? store.propiedadesNaves.cost_in_credits : null} </p>
                            <p className="text-left"><strong>Length: </strong>{store.propiedadesNaves ? store.propiedadesNaves.length : null} </p>
                            <p className="text-left"><strong>Crew: </strong>{store.propiedadesNaves ? store.propiedadesNaves.crew : null} </p>
                            <p className="text-left"><strong>Passengers: </strong>{store.propiedadesNaves ? store.propiedadesNaves.passengers : null} </p>
                            <p className="text-left"><strong>Hyperdrive Rating: </strong>{store.propiedadesNaves ? store.propiedadesNaves.hyperdrive_rating : null} </p>
                            <p className="text-left"><strong>MGLT: </strong>{store.propiedadesNaves ? store.propiedadesNaves.MGLT : null} </p>
                            <p className="text-left"><strong>Cargo Capacity: </strong>{store.propiedadesNaves ? store.propiedadesNaves.cargo_capacity : null} </p>
                            <p className="text-left"><strong>Consumables: </strong>{store.propiedadesNaves ? store.propiedadesNaves.consumables : null} </p>
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
export default Starships;