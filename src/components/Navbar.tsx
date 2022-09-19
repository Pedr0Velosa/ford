import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>FORD</div>
        <div className={styles.center}>
          <ul className={styles.pagesList}>
            <li className={styles.box}>
              <Link href={'/'}>
                <a className={styles.link}>
                  <p className={styles.underline}>
                    Home
                  </p>
                </a>
              </Link>
            </li>
            <li className={styles.box}>
              <Link href={'/customer'}>
                <a className={styles.link}>
                  <p className={styles.underline}>
                    Customer
                  </p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header >
  )
}

export default Navbar