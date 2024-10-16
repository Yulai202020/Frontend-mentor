import style from "./main.module.scss";

function QRCode() {
    return (
        <div className={style.container}>
            <div className={style.form}>
                <img alt="qr_code" className={style.image_qr_code} src="/image-qr-code.png" />
                <h1 className={style.title}>Improve your front-end skills by building projects</h1>
                <p className={style.description}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    );
}

export default QRCode;