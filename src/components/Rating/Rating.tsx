import styles from "./main.module.scss";
import config from "../../../config.json";

function Rating() {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.img_container}>
                    <img alt="star" className={styles.img_star} src={`${config.basepath}/star.svg`}></img>
                </div>

                <h1 className={styles.title}>How did we do?</h1>

                <p className={styles.about}>
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                </p>

                <p>
                    <button className={styles.rating_buttons}>1</button>
                    <button className={styles.rating_buttons}>2</button>
                    <button className={styles.rating_buttons}>3</button>
                    <button className={styles.rating_buttons}>4</button>
                    <button className={styles.rating_buttons}>5</button>
                </p>
                
                <button type="submit" className={styles.submit_button}>Submit</button>
            </div>
        </div>
    );
}

export default Rating;
