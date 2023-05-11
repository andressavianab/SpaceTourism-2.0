import styles from "./Destination.module.css";

import moon from "../../assets/destination/image-moon.webp";
import { useParams } from "react-router-dom";

import data from '../../data.json'
import { Navbar } from "../../components/Navbar/Navbar";

const destinations = data.destinations

export const Destination = () => {

  const params = useParams()
  let destination = destinations.find((destination) => {
    return destination.name === params.name
  })

  return (
    <main className={styles.main}>
      <div>
        <img src={destination.images.png} alt="" />
      </div>
      <div>
       <Navbar />
        <article className={styles.article}>
          <h2>{destination.name.toUpperCase()}</h2>
          <p>
            {destination.description}
          </p>
        </article>
        <div className={styles.sub_article}>
          <div className={styles.sub_article_div}>
            <span className={styles.sub_heading_1}>AVG. DISTANCE</span>
            <span className={styles.sub_heading_2}>{destination.distance.toUpperCase()}</span>
          </div>
          <div className={styles.sub_article_div}>
            <span className={styles.sub_heading_1}>EST. TRAVEL TIME</span>
            <span className={styles.sub_heading_2}>{destination.travel.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </main>
  );
};
