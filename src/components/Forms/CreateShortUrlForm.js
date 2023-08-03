import styles from "./CreateShortUrlForm.module.css";

const CreateShortUrlForm = () => {
  return (
    <form className={styles.form}>
        <input className={`${styles["input-longurl"]} ${styles.input}`}></input>
        <button className={styles.button}>Shorten!</button>
        <input className={`${styles["input-shorturl"]} ${styles.input}`} readOnly></input>
    </form>
  );
};

export default CreateShortUrlForm;