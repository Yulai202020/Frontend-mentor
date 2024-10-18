import style from "./style.module.scss";

function ContactForm() {
    return (
        <>
        <div className={style.container}>
            <form className={style.form}>
                <h1>Contact Us</h1>
                <div className={style.flex_grid}>
                    <div className={style.flex_item}>
                        <label className={style.labelForm} htmlFor="firstname">First Name <span className={style.green_asterisk}>*</span></label>
                        <input type="text" name="firstname" />
                    </div>

                    <div className={style.flex_item}>
                        <label className={style.labelForm} htmlFor="lastname">Last Name <span className={style.green_asterisk}>*</span></label>
                        <input type="text" name="lastname" />
                    </div>
                </div>

                <label className={style.labelForm} htmlFor="email">Email Address <span className={style.green_asterisk}>*</span></label>
                <input className={style.emailAddress} type="text" name="email" />

                <div className={style.flex_grid}>
                    <div className={style.flex_item}>
                        <label>
                            <input type="checkbox" name="checkbox" value="Boat" />
                            General Enquiry
                        </label>
                    </div>

                    <div className={style.flex_item}>
                        <label>
                            <input type="checkbox" name="checkbox" value="Boat" />
                            Support Request
                        </label>
                    </div>
                </div>

                <label className={style.labelForm} htmlFor="checkbox">Message <span className={style.green_asterisk}>*</span></label>
                <textarea className={style.message} id="message" name="message" rows={4} cols={50}></textarea>

                <label className={style.checkbox_text}>
                    <input type="checkbox" name="checkbox" value="Boat" />
                    I consent to being contacted by the team <span className={style.green_asterisk}>*</span>
                </label>

                <button type="submit" className={style.submit_button}>Submit</button>
            </form>
        </div>
        </>
    );
}

export default ContactForm;