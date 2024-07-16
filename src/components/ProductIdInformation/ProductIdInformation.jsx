import Image from 'next/image'
import styles from './ProductIdInformation.module.scss'
import LinkBack from '../buttons/LinkBack/LinkBack'


const ProductIdInformation = () => {
    return (
        <div className={styles.wrapper}>
            <div className={`sectionTitleWpapp`}>
                <LinkBack href="/products" />

                <h1 className={`sectionTitle`}>
                    <span>Eurosil A200</span>
                </h1>
            </div>

            <Image
                src='/images/products/Eurosil-A200.webp'
                width={280}
                height={280}
                alt='Eurosil-A200'
            />
            <h2>Eurosil - це високоякісний діоксид кремнію</h2>
            <p>Питома поверхня, по методу БЕТ складає 218 м²/г. SiO2 Eurosil™ - безбарвна кристалічна речовина, що володіє високим рівнем твердості та міцності. Не реагує з водою та стійкий до дії кислот.</p>

            <div className={styles.block}>
                <Image
                    className={styles.blockImg}
                    src='/images/products/crystals.webp'
                    width={280}
                    height={280}
                    alt='Eurosil-A200'
                />
                <p className={styles.blockText}>Високочистий нанодисперсний аморфний кремнезем, отриманий шляхом фторидно-амонієвої переробки. Дає змогу поліпшити сипучість, зменшити схильність порошків до спікання, перетворити речовину на зручну для дозування «суху рідину», стабілізувати в`язкість, підвищити міцність, модифікувати інші властивості виробів і речовин. Зазвичай  використовують, як активний високодисперсний наповнювач у емульсіях, таблетках, гелях, мазях тощо.</p>
            </div>

            <div className={styles.block}>
                <Image
                    className={styles.blockImg}
                    src='/images/products/powder.webp'
                    width={280}
                    height={280}
                    alt='Eurosil-A200'
                />
                <p className={styles.blockText}>Використовують як високоякісний наповнювач у виробництві гуми, пластмаси, штучної шкіри, в якості загущувача рідин (фарби, консистентних змазок, клеїв, герметиків тощо), в якості носіїв активних речовин (медицина, парфумерія, виробництво мінеральних добрив), антизлежувач сипучих матеріалів (запобігає комкуванню сипучих речовин), а також в радіоелектроніці, текстильній, косметичній та харчовій галузях.</p>
            </div>



        </div>
    )
}

export default ProductIdInformation