import styles from './FreeSamples.module.scss'


const FreeSamples = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>**оптові ціни від 35 кг, подробиці за номером  <a className={styles.link} href="tel:+380636270773">+380-63-627-07-73</a>
            </p>
            <p className={styles.text}>Звяжіться з нами щоб отримати тестові зразки нашої продукції БЕЗКОШТОВНО!</p>
        </div>
    )
}


export default FreeSamples