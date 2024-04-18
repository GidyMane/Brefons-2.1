import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ title, content }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className="flex flex-wrap">{title}</span>
        <span className={styles.number}>{content}</span>
      </div>
    </div>
  );
};

export default Card;
