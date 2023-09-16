import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button className="btn btn-xs ml-4" onClick={handleSignOut}>Sign Out</button>
                    </>
                        :
                        <Link to="/login">Login</Link>
                }
            </div>
        </>
    );
};

export default Header;