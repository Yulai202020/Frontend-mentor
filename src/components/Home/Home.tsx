import style from "./style.module.scss";

function Home() {
    return (
        <div className={style.box}>
            <h1>Home page.</h1>

            <h3>Links</h3>

            <a className={style.link} href="/SocialLinksProfile">Social Links Profile</a>
            <a className={style.link} href="/BlogPreviewCard">Blog Preview Card </a>
            <a className={style.link} href="/Rating">Rating</a>
            <a className={style.link} href="/QRCode">QR code</a>
        </div>
    );
}

export default Home;