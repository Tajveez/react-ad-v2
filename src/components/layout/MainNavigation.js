import {Link} from "react-router-dom"
import navCss from "./MainNavigation.module.css";
import {useContext} from 'react'
import FavoritesContext from '../../store/favorites-context'
const MainNavigation = () => {
    const favoritesCtx = useContext(FavoritesContext)
    return (
        <header className={navCss.header}>
            <div className={navCss.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites ({favoritesCtx.totalFavorites})</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
