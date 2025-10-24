import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Sistema clínico en construcción</h1>
        <p className={styles.heroSubtitle}>
          Tokens de color, tipografía y animación provenientes del panel legado ya están listos
          para usarse en la nueva experiencia.
        </p>
      </header>

      <section className={styles.showcase}>
        <div className={styles.logoRow}>
          <a className={styles.logoLink} href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className={styles.logo} alt="Vite logo" />
          </a>
          <a className={styles.logoLink} href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className={styles.logo} alt="React logo" />
          </a>
        </div>
        <p className={styles.caption}>
          Explora los archivos de tokens para mantener un estilo visual consistente en todos los
          módulos del sistema.
        </p>
      </section>

      <div className={styles.counterCard}>
        <h2 className={styles.counterTitle}>Sesiones registradas</h2>
        <p className={styles.counterValue}>{count}</p>
        <button className={styles.ctaButton} onClick={() => setCount((value) => value + 1)}>
          Sumar sesión
        </button>
      </div>

      <a className={styles.docsLink} href="docs/design-system.md" target="_blank" rel="noreferrer">
        Revisar guía de diseño
      </a>
    </div>
  )
}

export default App
