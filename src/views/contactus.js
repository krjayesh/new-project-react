import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './contactus.module.css'

const Contactus = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Contact us - New Project</title>
        <meta property="og:title" content="Contact us - New Project" />
      </Helmet>
    </div>
  )
}

export default Contactus
