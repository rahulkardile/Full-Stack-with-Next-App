import styles from "./page.module.css"
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className={styles.mainTitle}>
            Our Works
        </h1>
        {children}
    </div>
  )
}

export default Layout