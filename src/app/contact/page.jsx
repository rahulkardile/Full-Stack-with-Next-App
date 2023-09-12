import styles from "./page.module.css"
import Button from "@/components/button/Buttton"
import Image from "next/image"
import React from 'react'

export const metadata = {
  title: 'DEV ARE Contact Info',
  description: 'This an demo description for the contant page',
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
          src="/contact.png"
          alt=""
          fill={true}
          className={styles.image}
          />
        </div>
        <div className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message" className={styles.textArea}></textarea>
          <Button url="#" text="Send" />
        </div>
      </div>
    </div>
  )
}

export default Contact