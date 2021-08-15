import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project</title>
        <meta property="og:title" content="New Project" />
      </Helmet>
      <header id="header" className={styles['container1']}>
        <div className={styles['container2']}>
          <img
            alt="image"
            src="/playground_assets/group%20608.svg"
            className={styles['image']}
          />
        </div>
        <img
          alt="image"
          src="/playground_assets/menu.svg"
          className={styles['image1']}
        />
        <div className={styles['container3']}>
          <Link
            to="/"
            className={` ${styles['navlink']} ${projectStyles['thqLink']} `}
          >
            <span className={styles['text']}>Home</span>
          </Link>
          <Link
            to="/register"
            className={` ${styles['navlink1']} ${projectStyles['thqLink']} `}
          >
            About us
          </Link>
          <a
            href="https://example.com"
            className={` ${styles['link']} ${projectStyles['thqLink']} `}
          >
            Contact
          </a>
        </div>
        <div className={styles['container4']}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link1']}
          >
            <img
              alt="image"
              src="/playground_assets/download%20(2)%2011.svg"
              className={` ${styles['image2']} ${projectStyles['thqLink']} `}
            />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link2']}
          >
            <img
              alt="image"
              src="/playground_assets/icons8-facebook-circled%2011.svg"
              className={` ${styles['image3']} ${projectStyles['thqLink']} `}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link3']}
          >
            <img
              alt="image"
              src="/playground_assets/icons8-instagram-logo%2011.svg"
              className={` ${styles['image4']} ${projectStyles['thqLink']} `}
            />
          </a>
        </div>
      </header>
      <div className={styles['container5']}>
        <img
          alt="image"
          src="/playground_assets/helmet-emoji-1000h.webp"
          className={styles['image5']}
        />
      </div>
    </div>
  )
}

export default Home
