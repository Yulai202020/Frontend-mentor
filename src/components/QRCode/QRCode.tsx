import "./style.scss";

function QRCode() {
    return (
        <>
        <div className="container">
            <div className="form">
                <img alt="qr-code" className="qr-code-image" src="/image-qr-code.png" />
                <h1 className="title">Improve your front-end skills by building projects</h1>
                <p className="description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
        </>
    );
}

export default QRCode;