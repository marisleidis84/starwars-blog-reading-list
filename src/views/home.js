import { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../components/Card";

const Home = props => {
    const { store, actions } = useContext(Context);
    return (
            <div className='row'>
                <div className='col-md-4'>
                    <Card categoria={'CHARACTERS'} href={'/characters'} src={'img/star-wars-personajes.jpg'}/>
                </div>
                <div className='col-md-4'>
                    <Card categoria={'PLANETS'} href={'/planets'} src={"img/planets.jpg"}/>
                </div>
                <div className='col-md-4'>
                    <Card categoria={'STARSHIPS'} href={'/starships'} src={"http://placehold.it/900x700"}/>
                </div>
            </div>
    )
}

export default Home;