import { Link } from 'react-router-dom'
import styles from './Home.module.css'

import exploreButton from '../../assets/explore.svg'

export const Home = () => { 
    return (
        <main className={styles.main}>
            <div className={styles.main_text}>
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>
            Let’s face it; if you want to go to space, 
            you might as well genuinely go to outer space and 
            not hover kind of on the edge of it. Well sit back, 
            and relax because we’ll give you a truly out of this world experience!
            </p>
            </div>
            <div className={styles.explore_button}>
                <Link to={"/destination/Moon"}>
                    <img src={exploreButton} alt="" />
                </Link>
            </div>
        </main>
    ) 
}