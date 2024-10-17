import "./style.scss";

function ContactForm() {
    return (
        <>
        <div className="container">
            <form className="form">
                <h1>Contact Us</h1>
                <div className="flex-grid">
                    <div className="flex-item">
                        <label className="labelForm" htmlFor="firstname">First Name <span className="green-asterisk">*</span></label>
                        <input type="text" name="firstname" />
                    </div>

                    <div className="flex-item">
                        <label className="labelForm" htmlFor="lastname">Last Name <span className="green-asterisk">*</span></label>
                        <input type="text" name="lastname" />
                    </div>
                </div>

                <label className="labelForm" htmlFor="email">Email Address <span className="green-asterisk">*</span></label>
                <input className="emailAddress" type="text" name="email" />

                <div className="flex-grid borders" id="idk">
                    <div className="flex-item">
                        <label>
                            <input type="checkbox" name="checkbox" value="Boat" />
                            General Enquiry
                        </label>
                    </div>

                    <div className="flex-item">
                        <label>
                            <input type="checkbox" name="checkbox" value="Boat" />
                            Support Request
                        </label>
                    </div>
                </div>

                <label className="labelForm" htmlFor="checkbox">Message <span className="green-asterisk">*</span></label>
                <textarea className="message" id="message" name="message" rows={4} cols={50}></textarea>

                <label className="checkbox_text">
                    <input type="checkbox" name="checkbox" value="Boat" />
                    I consent to being contacted by the team <span className="green-asterisk">*</span>
                </label>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
        </>
    );
}

export default ContactForm;