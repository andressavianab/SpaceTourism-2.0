import { NavLink } from 'react-router-dom';
import data from '../../data.json'

import styles from './NavbarCrew.module.css'

const crew = data.crew

export const NavbarCrew = () => { 
    return (
        <nav className={styles.nav_bar}>
            {crew.map((person) => {
                return (
                    <NavLink className={styles.nav_bar_content} to={`/crew/${person.name}`} />
                )
            })}
        </nav>
    ) 
}