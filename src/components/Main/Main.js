import styles from "./Main.module.css";
import CreateShortUrlForm from "../Forms/CreateShortUrlForm";

const Main = () => {
  return (
    <section className={styles.main}>
      <div className={styles.title}>
        <h1>Hi there! This is URL shortener</h1>
        <p>Enter long URL and get a shortened version. The url can be up too 1000 characters long.</p>
      </div>
      <CreateShortUrlForm />
    </section>
  );
};

export default Main;