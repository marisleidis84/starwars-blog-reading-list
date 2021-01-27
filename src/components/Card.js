const Card = (props) => {
    return (
        <div className="row text-center ">
            <div className="col-lg-12 col-sm-6 portfolio-item ">
                <div className="card h-100 border-0">
                    <a href={props.href}><img className="card-img-top" src={props.src} alt="" /></a>
                    <div className="card-body bg-dark">
                        <h4 className="card-title"><a href={props.href}>{props.categoria}</a></h4>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;