import styles from "./Crew.module.css";
import { NavbarCrew } from "../../components/NavbarCrew/NavbarCrew";
import { useParams } from "react-router-dom";
import data from '../../data.json'

const crew = data.crew

export const Crew = () => {

    const params = useParams()
    let crewPerson = crew.find((person) => {
        return person.name === params.crew
    }) 

  return (
    <main className={styles.main}>
      <div className={styles.crew_texts}>
        <h4>{crewPerson.role.toUpperCase()}</h4>
        <h3 className={styles.crew_texts_name}>{crewPerson.name.toUpperCase()}</h3>
        <p>
          {crewPerson.bio}
        </p>
       <NavbarCrew />
      </div>
      <div className={styles.crew_image}>
        <img src={crewPerson.images.png} alt="" />
      </div>
    </main>
  );
};
