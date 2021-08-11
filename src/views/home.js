import React from 'react'

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
      <img
        alt="image"
        src="/playground_assets/registergbimg-1200h.png"
        className={styles['image']}
      />
      <header id="header" className={styles['container1']}>
        <img
          alt="image"
          src="/playground_assets/group%20608.svg"
          className={styles['image1']}
        />
        <div className={styles['container2']}>
          <a
            href="https://example.com"
            className={` ${styles['link']} ${projectStyles['thqLink']} `}
          >
            Home
          </a>
          <a
            href="https://example.com"
            className={` ${styles['link1']} ${projectStyles['thqLink']} `}
          >
            About us
          </a>
          <a
            href="https://example.com"
            className={` ${styles['link2']} ${projectStyles['thqLink']} `}
          >
            Contact
          </a>
        </div>
        <div className={styles['container3']}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link3']}
          >
            <img
              alt="image"
              src="/playground_assets/download%20(2)%201.svg"
              className={` ${styles['image2']} ${projectStyles['thqLink']} `}
            />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link4']}
          >
            <img
              alt="image"
              src="/playground_assets/icons8-facebook-circled%201.svg"
              className={` ${styles['image3']} ${projectStyles['thqLink']} `}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link5']}
          >
            <img
              alt="image"
              src="/playground_assets/icons8-instagram-logo%201.svg"
              className={` ${styles['image4']} ${projectStyles['thqLink']} `}
            />
          </a>
        </div>
      </header>
      <div id="hero section" className={styles['container4']}>
        <div className={styles['container5']}>
          <h1 className={styles['text']}>Ready</h1>
          <img
            alt="image"
            src="/playground_assets/carolina-panthers-riddell-blaze-alternate-speed-mini-helmet-2_1024x1024_adobespark%202-1200h.png"
            className={styles['image5']}
          />
          <h1 className={styles['text1']}>To Rumble</h1>
        </div>
      </div>
      <div className={styles['container6']}>
        <form
          id="register"
          name="register"
          action="submit"
          method="submit"
          target="self"
          className={styles['form']}
        >
          <input
            type="text"
            id="full name"
            name="Full name"
            required="true"
            placeholder="Full name"
            className={` ${styles['textinput']} ${projectStyles['thqTextInput']} `}
          />
          <input
            type="text"
            id="email address"
            name="Email address"
            required="true"
            placeholder="Email address"
            className={` ${styles['textinput1']} ${projectStyles['thqTextInput']} `}
          />
          <input
            type="text"
            id="age"
            name="Age"
            required="true"
            placeholder="Age"
            className={` ${styles['textinput2']} ${projectStyles['thqTextInput']} `}
          />
          <input
            type="text"
            id="shirt size"
            name="Shirt size"
            required="true"
            placeholder="Shirt size"
            className={` ${styles['textinput3']} ${projectStyles['thqTextInput']} `}
          />
          <button
            id="submit"
            name="submit"
            type="submit"
            className={` ${styles['button']} ${projectStyles['thqButton']} `}
          >
            Submit request
          </button>
        </form>
      </div>
      <div className={styles['container7']}>
        <span className={styles['text2']}>Or</span>
        <img
          alt="image"
          src="/playground_assets/download%20(11)%201.svg"
          className={styles['image6']}
        />
        <span className={styles['text3']}>call us at +1 285 5210847</span>
      </div>
    </div>
  )
}

export default Home
