import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './aboutus.module.css'

const Aboutus = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>About us - New Project</title>
        <meta property="og:title" content="About us - New Project" />
      </Helmet>
    </div>
  )
}

export default Aboutus
