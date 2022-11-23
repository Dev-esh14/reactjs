import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><i className="fa fa-address-book-o" aria-hidden="true"></i></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={"/register"}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to={"/about"}>About</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Service</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                
                <Link to={"/register"}><button className="btn btn-outline-success my-2 my-sm-0 submit-register" type="submit">Sign up</button></Link>
                <Link to={"/"}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
              </form>
            </div>
          </nav>
        </div>
    );
}