import styles from "./footer.module.css"
import React from 'react'
import Image from "next/image"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>DEV Community © 2016 - 2023.</div>
      <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="facebook image" />
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="instagram image" />
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="twitter image" />
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="youtube image" />
        </div>
    </div>
  )
}

export default Footer