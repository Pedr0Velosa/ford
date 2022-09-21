import React from 'react'
import { INTEGRANTES } from '../utils/intergantes'
import styles from '../styles/Integrantes.module.css'
import ParticleBackground from './ParticleBackground'

const Integrantes = () => {
  return (
    <main>
      <ParticleBackground />
      <div className={styles.container}>
        <h1 style={{ textAlign: 'center' }}>Integrantes:</h1>
        <ul className={styles.list}>
          {INTEGRANTES.map(i =>
            <li key={i.rm}>
              <p>Nome: {i.name}</p>
              <p style={{ marginLeft: '20px' }}>RM: {i.rm}</p>
            </li>
          )}
        </ul>
      </div>
    </main>
  )
}

export default Integrantes