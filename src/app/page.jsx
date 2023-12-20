import Image from 'next/image'
import styles from './page.module.css'
import Hero from "/public/images/hero.svg"
export default function Home() {
  return (
  <div className={styles.container}> 
    <div className={styles.col}>
      <h1 className={styles.title}>Your Best online shop destination!</h1>
      <p className={styles.desc}>Discover a world of endless shopping possibilities at our online store. Browse.choose.and order your favorit products from the comfort of your home </p>
      <button className={styles.button}> Shop Now</button>
    </div>


    <div className={styles.col}>
      <Image className={styles.img} src={Hero} alt='Hexa shop'/>
    </div>
  </div>
  )
}
