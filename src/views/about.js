import { useContext } from "react";
import { Context } from "../store/appContext";

const About = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <h1>About</h1>
            <p>Welcome {store.name} {store.lastname}</p>
            <button onClick={() => actions.c()}>Ejecutar</button>
        </>
    )
}

export default About;