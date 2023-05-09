import styles from './Subtitle.module.css'

interface SubtitleProps {
  number: string,
  text: string
}

export const Subtitle = ({number, text}: SubtitleProps) => {
  return <h5 className={styles.h5}><span>{number}</span>{text}</h5>;
};
