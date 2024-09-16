import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
function Navbar(){
  const cartCount = useSelector((state) => state.cartInfo.cartValues.length);
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-teritary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}><span className="text-center">Louis Vuitton</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Store</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sneakers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Louis Vuitton Bags</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Men's section</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">women's Section</a>
        </li>
        <li className="nav-item">
          <Link to ="login" className="nav-link"><span className="me-2">Login</span><FontAwesomeIcon icon={faRightToBracket}/></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link"><span className="me-2">Cart{cartCount}</span>< FontAwesomeIcon icon={faShoppingCart} /></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
        </>
    )
}
export default Navbar;