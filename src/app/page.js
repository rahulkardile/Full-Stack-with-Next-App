import Image from 'next/image'
import Button from '@/components/button/Buttton'
import Hero from 'public/hero.png'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>
          Turning your ideas into Reality. We bring together the teams from the gloable tech industry.
        </p>
        <Button url="/portfolio" text="See our Work" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='Home Design' className={styles.img} />
      </div>
    </div>
  )
}
