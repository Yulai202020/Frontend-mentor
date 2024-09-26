import style from "./main.module.scss";

function SocialLinksProfile() {
    return (
        <>
            <div className={style.container}>
                <div className={style.form}>
                    <img className={style.profileImage} src="/profile.jpeg" alt="Profile picture" />
                    <h1 className={style.name}>Jessica Randall</h1>
                    <p className={style.liveAt}>London, United Kingdom</p>
                    <p className={style.about}>"Front-end developer and avid reader."</p>
                    {/* buttons */}
                    <button className={style.linkButton}>Github</button>
                    <button className={style.linkButton}>Frontend Mentor</button>
                    <button className={style.linkButton}>LinkedIn</button>
                    <button className={style.linkButton}>Twitter</button>
                    <button className={style.linkButton}>Instagram</button>
                </div>
            </div>
        </>
    );
}

export default SocialLinksProfile;
