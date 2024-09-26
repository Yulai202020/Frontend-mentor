import styles from "./main.module.scss";
import config from "../../../config.json";
import { useState } from "react";

function Rating() {
    const [rating, SetRating] = useState(0);
    const [form_compilete, Setform_compilete] = useState(false);

    const handle_rate_buttons = (event: MouseEvent<HTMLButtonElement>) => {
        const number = event.currentTarget.id;
        SetRating(Number(number));
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        Setform_compilete(true);
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={onSubmit}>
                {!form_compilete ? (
                    <>
                        <div className={styles.img_container}>
                            <img alt="star" className={styles.img_star} src={`${config.basepath}/star.svg`} />
                        </div>
        
                        <h1 className={styles.title}>How did we do?</h1>
        
                        <p className={styles.about}>
                            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                        </p>
        
                        <p>
                            {[1, 2, 3, 4, 5].map(num => (
                                <button
                                    id={num.toString()}
                                    type="button"
                                    className={`${styles.rating_buttons} ${rating === num ? styles.selected : ''}`}
                                    onClick={handle_rate_buttons}
                                >
                                    {num}
                                </button>
                            ))}
                        </p>
                        
                        <button type="submit" className={styles.submit_button}>Submit</button>
                    </>
                ) : (
                    <div className={styles.thank_contianer}>
                        <img alt="lg" src={`${config.basepath}/thank-you.svg`} />
                        <p className={styles.rating}>You selected {rating} out of 5</p>
                        <h1 className={styles.thanks}>Thank you!</h1>
                        <p className={styles.other_text}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Rating;
