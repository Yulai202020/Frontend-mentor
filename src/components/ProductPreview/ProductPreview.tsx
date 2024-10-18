import style from "./style.module.scss";

function ProductPreview() {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.image_container}>
                    <img src="/image-product-desktop.jpg" alt="image-product" />
                </div>
                <div className={style.text_container}>
                    <p>Perfume</p> 
                    <h1>Gabrielle Essence Eau De Parfum</h1>
                    <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                    <div className={style.cost}>
                        $149.99
                        <s>$169.99</s>
                    </div>
                    <button className={style.sumbit_button}><img src="/icon-cart.svg" /> Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductPreview;