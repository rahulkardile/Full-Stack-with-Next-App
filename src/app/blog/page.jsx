// "use client"

import Link from "next/link"
import { Metadata } from "next"
import styles from "./page.module.css"
import React from 'react'
import Image from "next/image"


async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    next : { revalidate: 10 },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export async function generateMetaData({ params }) {
  const post = await genData(params.id)
  return {
    title: post.title ,
    description: post.desc, 
    
  }
}

const Blog = async () => {

  const data = await getData();

  return (
    <div className={styles.mainContainer}>

      {data.map((item) => (

        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.image}
              className={styles.image}
              width={400}
              height={250}
              alt='' />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.content}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog