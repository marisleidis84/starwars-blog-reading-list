import Card from "../components/Card";

const Home = (props) => {
    return (
            <div className='row home' style={{'marginTop':'300px'}}>
                <div className='col-md-4'>
                    <Card categoria={'CHARACTERS'} href={'/characters'} src={'img/star-wars-personajes.jpg'}/>
                </div>
                <div className='col-md-4'>
                    <Card categoria={'PLANETS'} href={'/planets'} src={"img/planets.jpg"}/>
                </div>
                <div className='col-md-4'>
                    <Card categoria={'STARSHIPS'} href={'/starships'} src={"img/nave.jpg"}/>
                </div>
            </div>
    )
}

export default Home;