
const Card = (props) => {

    return (
        <div className="row text-center ">
            <div className="col-lg-12 col-sm-6 portfolio-item ">
                <div className="card h-100 border-0">
                    <a href={props.href}><img className="card-img-top" src={props.src} alt="" /></a>
                    <div className="card-body bg-dark d-flex justify-content-around">
                        <div></div>
                        <button type="button" className="btn " data-toggle="modal" data-target="#staticBackdrop" onClick={props.sendIndex} >
                            <a href={props.href} style={{ "color": "black" }}><b>{props.categoria}</b></a>
                        </button>
                        <div className='float-end d-inline mr-0'>                         
                            <i className={props.icon} style={{ cursor: 'pointer' }} onClick={props.favorito}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;