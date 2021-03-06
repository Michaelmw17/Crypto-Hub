import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAppContext } from '../../store';
import { useLoginCheck, logout } from '../../utils/setAuthToken';
import './style.css';

function Navbar() {
    const history = useHistory();
    const [state, dispatch] = useAppContext();

    useLoginCheck(dispatch);

    const handleLogOut = (e) => {
        e.preventDefault();
        logout(dispatch);
        history.push('/');
    };

    const loginRegLink = (
        <ul className="navbar-nav list-group list-group-horizontal">
            <li>
                <Link className="mb-1 mr-1 btn btn-sm active" to="/login">
                    Login
                </Link>
            </li>
            <li>
                <Link className="btn btn-sm active" to="/register">
                    Register
                </Link>
            </li>
        </ul>
    );
    const userLink = (
        <ul className="navbar-nav list-group list-group-horizontal">
            
            <li>
                <Link className="mb-1 mr-1 btn btn-sm active" to="/portfolio">
                    Portfolio
                </Link>
            </li>
            <li>
                <button
                    className="btn btn-sm active"
                    id="logoutBtn"
                    data-toggle="modal"
                    data-target="#logoutModal"
                    onClick={handleLogOut}
                >
                    <div>Logout</div>
                </button>
            </li>
        </ul>
    );
    return (
        <nav className="navbar navbar-expand-lg">
            
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbar1">
            <ul className="navbar-nav list-group list-group-horizontal">
            <li>
                <Link className="mb-1 mr-1 btn btn-sm active" to="/">
                    Home
                </Link>
            </li>
            {/* <li>
                <Link className="mb-1 mr-1 btn btn-sm active" to="/learn">
                    Learn
                </Link>
            </li> */}
            <li>
                <Link className="mb-1 mr-1 btn btn-sm active" to="/news">
                    News
                </Link>
            </li>
            </ul>
                {state.isAuthenticated ? userLink : loginRegLink}
            </div>
            
        </nav>
    );
}

export default Navbar;
