import style from "./style.module.scss";

function ProductPreview() {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <img src="/image-product-desktop.jpg" alt="image-product" className={style.cardImage} />
                <div className={style.cardContent}>
                    <p>Perfume</p> 
                    <h1>Gabrielle Essence Eau De Parfum</h1>
                    <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                    <div className={style.cost}>
                        <span className={style.green_text}>$149.99</span>
                        <div className={style.old_cost}>
                            <s>$169.99</s>
                        </div>
                    </div>
                    <button className={style.sumbit_button}><img className={style.cart} src="/icon-cart.svg" /> Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductPreview;