import { useContext } from "react"
import Card from "../components/Card"
import { Context } from "../store/appContext"

const Characters = () => {
    const { store, actions } = useContext(Context);

    const sendIndex = (e, id) => {
        e.preventDefault();
        actions.getCharactersProperties(id)
    }

    return (
        <>
            <div className='row'>
                {
                    !!store.personajes && store.personajes.results.length > 0 &&
                    store.personajes.results.map((personaje, i) => {
                        return (
                            <div className='col-md-3 mb-3'>
                                <Card 
                                key={i} 
                                categoria={personaje.name} 
                                src={`https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg`}
                                sendIndex={(e) => sendIndex(e,i+1)} />

                            </div>
                        )
                    })
                }
            </div>

            <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content text-white-50" style={{"backgroundColor":"black"}}>
                        <div className="modal-header ">
                            <h5 className="modal-title" id="staticBackdropLabel">Informacion de {store.propiedadesPersonajes ? store.propiedadesPersonajes.name :null}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body bg-dark" >
                            <p className="text-left"><strong>Height: </strong>{store.propiedadesPersonajes ? store.propiedadesPersonajes.height :null} cm</p>
                            <p className="text-left"><strong>Mass: </strong>{store.propiedadesPersonajes ? store.propiedadesPersonajes.mass :null} </p>
                            <p className="text-left"><strong>Hair_color: </strong>{store.propiedadesPersonajes ? store.propiedadesPersonajes.hair_color :null} </p>
                            <p className="text-left"><strong>Skin_color: </strong>{store.propiedadesPersonajes ? store.propiedadesPersonajes.skin_color :null} </p>
                            <p className="text-left"><strong>Eye_color: </strong>{store.propiedadesPersonajes ? store.propiedadesPersonajes.eye_color :null} </p>
                            <p className="text-left"><strong>Birth_year: </strong>{store.propiedadesPersonajes ? store.propiedadesPersonajes.birth_year :null} </p>
                            <p className="text-left"><strong>Gender: </strong>{store.propiedadesPersonajes ? store.propiedadesPersonajes.gender :null} </p>
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

export default Characters;