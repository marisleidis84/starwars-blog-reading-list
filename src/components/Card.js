
const Card = (props) => {
    
    return (
        <div className="row text-center ">
            <div className="col-lg-12 col-sm-6 portfolio-item ">
                <div className="card h-100 border-0">
                    <a href={props.href}><img className="card-img-top" src={props.src} alt="" /></a>
                    <div className="card-body bg-dark">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop" onClick={props.sendIndex} >
                        {props.categoria}
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;