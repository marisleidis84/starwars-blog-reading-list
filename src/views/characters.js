import { useEffect } from 'react'
import { useContext } from "react"
import Card from "../components/Card"
import { Context } from "../store/appContext"

const Characters = (props) => {
    const { store, actions } = useContext(Context);
    console.log(store)

    useEffect(() => {
        actions.getCharacters()
    }, []);



    return (
        <div className='row'>
            {
                !!store.personajes && store.personajes.results.length > 0 &&
                store.personajes.results.map((personaje, i) => {
                    return (
                        <div className='col-md-3 mb-3'>
                            <Card key={i} src={"http://placehold.it/500x700"} categoria={personaje.name} src={`https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`}/>
                        </div>
                    )
                })
            }
        </div>



    )
}

export default Characters;