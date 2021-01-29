import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
  const { store, actions } = useContext(Context);

  const eliminar = (y) => {
    actions.getTrash(y)
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/"><img src={'/img/dia-star-wars.jpg'} alt="img" /></Link>

        <div className="dropdown">
          <button className="btn dropdown-toggle " type="button" data-toggle="dropdown" style={{ 'width': '200px', 'backgroundColor': '#ed8b2f' }}>Favorites  <span className="badge bg-secondary">{store.contador}</span></button>
          <ul className="dropdown-menu border-0" style={{ 'width': '350px' }}>

            {
              !!store.favoritos &&
              store.favoritos.map((favorito, i, h) => {
                return (
                  <div className='row border-0 d-flex justify-content-between ml-3' key={i} style={{ 'width': '300px' }}>
                    <div>
                      <li id="task" className=" border-0">{favorito}</li>
                    </div>
                    <div>
                      <i className='fas fa-trash-alt mt-3' onClick={() => eliminar(i)} style={{ cursor: 'pointer' }}></i>
                    </div>
                  </div>
                )
              })
            }

          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;