import AppRouter from "../routes/AppRouter";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <ul>
                <li><NavLink to='home'>Home</NavLink></li>
                <li><NavLink to='listproduct'>Lista</NavLink></li>
            </ul>
            <AppRouter />
        </>
    );
}

export default Header;