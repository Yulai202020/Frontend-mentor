import "./main.scss"

function General() {
    return (
        <>
        <div className="container">
            <div className="form">
                <img className="profile-image" src="/profile.jpeg"></img>
                <h3 className="name">Jessica Randall</h3>
                <p className="live-at">London, United Kindom</p>
                <p className="about">"Front-end developer and avid reader."</p>
                {/* buttons */}
                <button className="link-button">Github</button>
                <button className="link-button">Frontend Mentor</button>
                <button className="link-button">LinkedIn</button>
                <button className="link-button">Twitter</button>
                <button className="link-button">Instagram</button>
            </div>
        </div>
        </>
    );
}

export default General;