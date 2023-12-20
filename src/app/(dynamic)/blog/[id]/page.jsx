
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
export default function Post() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>In greek my thology,the Amazons</h1>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, dolor. Voluptatum harum iste molestiae labore modi excepturi, quibusdam recusandae beatae!</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
          className={styles.postImage}
            src={"https://images.pexels.com/photos/609549/pexels-photo-609549.jpeg"}
            alt='post image'
            fill={true}
          />
          <span className={styles.author}>appas almhamd</span>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati distinctio similique ipsam expedita quo ea consectetur temporibus itaque, rem repellat aliquid sed tenetur aspernatur nesciunt molestiae praesentium explicabo ullam. Hic neque minus dolor omnis quibusdam, expedita illum, doloremque voluptates incidunt sapiente dignissimos harum facilis distinctio iusto nisi quos impedit itaque error! Modi doloremque debitis minima? Sed nihil ut sit tempora, nulla placeat. Ullam velit at eum. Eaque quasi illum unde accusamus in quo aperiam dolore corporis harum, veniam, cupiditate eos minima, at minus nesciunt quam. Quidem delectus nobis, illo, cupiditate magnam iusto omnis enim eveniet eligendi porro placeat? Veritatis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi facere aliquid rerum voluptatum praesentium ab atque aliquam, delectus dolorum reprehenderit, minima, aut tempora fugit consequuntur corrupti voluptatem labore molestias minus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus a libero impedit sequi distinctio architecto excepturi corporis, eius ipsa aspernatur necessitatibus consequatur, alias maxime vel, voluptates nostrum quasi facilis aperiam!
        </p>
      </div>
    </div>
  )
}
