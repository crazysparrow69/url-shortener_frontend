import { useCallback, useState } from "react";
import styles from "./CreateShortUrlForm.module.css";
import useHttp from "../../hooks/use-http";

const CreateShortUrlForm = () => {
  const [longurl, setLongurl] = useState("");
  const [shorturl, setShorturl] = useState("");

  const shortenurlCallback = useCallback((data) => {
    console.log(data);
    setShorturl(`http://localhost:5000/${data.short}`);
  }, []);

  const { isLoading, error, sendRequest } = useHttp(shortenurlCallback);

  const submitFormHandler = (event) => {
    event.preventDefault();
    sendRequest({
      url: "http://localhost:5000/shortlink",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        full: longurl,
      },
    });
  };

  const inputOnChangeHandler = (event) => {
    setLongurl(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={styles["form-content"]}>
      <input
        className={`${styles["input-longurl"]} ${styles.input}`}
        onChange={inputOnChangeHandler}
        value={longurl}
      ></input>
      {isLoading ? <p>Loading...</p> : <button type="submit" className={styles.button}>
        Shorten!
      </button>}
      <input
        className={`${styles["input-shorturl"]} ${styles.input}`}
        value={shorturl}
        readOnly
      ></input>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default CreateShortUrlForm;
