"use client"

import { useSession } from "next-auth/react";
import styles from "./page.module.css"
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

const Dashboard = () => {

  const session = useSession()
  console.log(session);

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  // console.log(data);

  return (
    <div className={styles.container}>
      {/* {
        data.map((item)=> (
          <div key={item.id}> {item.userId}
          <h1>{item.title}</h1>
          </div>
          ))
      } */} Dashboard
    </div>
  )
}

export default Dashboard



  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       next: { revalidate: 10 },
  //     })

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const Data = res.json();

  //     setData(Data);
  //     setLoading(false);
  //   };
  //   getData();
  // }, []);