import styles from "./page.module.css"
import Button from "@/components/button/Buttton"
import Image from "next/image"
import React from 'react'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning Digital experiences.</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus voluptates culpa voluptatem incidunt facilis excepturi sint praesentium nam enim velit odit accusamus accusantium recusandae non magni, nihil tenetur cumque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Ad, quo nulla cum ducimus libero laudantium veritatis magni labore quaerat aliquid eum sint accusantium aperiam cupiditate totam dignissimos inventore at nostrum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Labore autem libero id. Dolorum fugit inventore culpa possimus blanditiis voluptas, eius ab ipsam natus ipsa dolores praesentium earum esse maiores suscipit!</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We</h1>
          <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure laborum velit natus atque, deleniti eaque accusantium consequuntur debitis eligendi laudantium. Temporibus accusamus ullam veniam voluptas doloribus labore id fugiat molestiae!
          <br /> <br />
          - Dynamic Website 
          <br /> <br /> - Fast and Handdy 
          <br /> <br /> - Mobile first website
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About