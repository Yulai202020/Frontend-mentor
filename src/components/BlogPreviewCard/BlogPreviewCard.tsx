import "./style.scss";
import config from "../../../config.json";

function BlogPreviewCard() {
    return (
        <>
        <div className="container">
            <div className="shadow">
                <div className="form">
                    <img className="banner" src={`${config.basepath}/banner.svg`} alt="banner"/>

                    <p className="type">Learning</p>

                    <p>Published 21 Dec 2023</p>

                    <h1 className="title">HTML & CSS foundations</h1>

                    <p className="about">These languages are the backbone of every website, defining structure, content, and presentation.</p>

                    <p className="centered"><img className="profile_image" src={`${config.basepath}/image-avatar.webp`} alt="man"/> Greg Hooper</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default BlogPreviewCard;