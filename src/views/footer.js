import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Footer - New Project</title>
        <meta property="og:title" content="Footer - New Project" />
      </Helmet>
      <div className={styles['container01']}></div>
      <div className={styles['container02']}>
        <div className={styles['container03']}>
          <div className={styles['container04']}>
            <h1 className={styles['text']}>Ready</h1>
            <img
              alt="image"
              src="/playground_assets/carolina-panthers-riddell-blaze-alternate-speed-mini-helmet-2_1024x1024_adobespark%203-1200h.png"
              className={styles['image']}
            />
          </div>
          <div className={styles['container05']}>
            <h1 className={styles['text1']}>to rumble</h1>
          </div>
        </div>
        <div className={styles['container06']}>
          <div className={styles['container07']}>
            <div className={styles['container08']}>
              <h1 className={styles['text2']}>
                Youâre just a click away, click ð
              </h1>
            </div>
            <div className={styles['container09']}>
              <button
                className={` ${styles['button']} ${projectStyles['thqButton']} `}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['container10']}>
        <h1 className={styles['text3']}>Saluting the team</h1>
        <div className={styles['container11']}>
          <img
            alt="image"
            src="/playground_assets/rectangle%20183%20(3)-1200w.png"
            className={styles['image1']}
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%20183%20(3)-1200w.png"
            className={styles['image2']}
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%20183%20(3)-1200w.png"
            className={styles['image3']}
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%20183%20(3)-1200w.png"
            className={styles['image4']}
          />
        </div>
        <div className={styles['container12']}>
          <span className={styles['text4']}>Â© 2021. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
