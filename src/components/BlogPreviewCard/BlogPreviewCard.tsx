import style from "./main.module.scss";

function BlogPreviewCard() {
    return (
        <>
        <div className={style.container}>
            <div className={style.shadow}>
                <div className={style.form}>
                    <img className={style.banner} src="/banner.svg" alt="banner"/>

                    <p className={style.type}>Learning</p>

                    <p>Published 21 Dec 2023</p>

                    <h1 className={style.title}>HTML & CSS foundations</h1>

                    <p className={style.about}>These languages are the backbone of every website, defining structure, content, and presentation.</p>

                    <p className={style.centered}><img className={style.profile_image} src="/image-avatar.webp" alt="avatar"/> Greg Hooper</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default BlogPreviewCard;