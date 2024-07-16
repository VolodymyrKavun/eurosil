import LinkBack from "@/components/buttons/LinkBack/LinkBack"


const ProductsSection = () => {
    return (
        <section className="pageSection">
            <div className="container">
                <div className={`sectionTitleWpapp`}>
                    <LinkBack href="/" />
                    <h1 className={`sectionTitle`}>
                        <span>Продукція</span>
                    </h1>
                </div>
            </div>
        </section>
    )
}


export default ProductsSection