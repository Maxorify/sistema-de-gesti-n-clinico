import styles from './Footer.module.scss'

export interface FooterProps {
  className?: string
}

const currentYear = new Date().getFullYear()

export function Footer({ className }: FooterProps) {
  const footerClassName = className ? `${styles.footer} ${className}` : styles.footer

  return (
    <footer className={footerClassName}>
      <p className={styles.copy}>© {currentYear} Mi Clínica. Todos los derechos reservados.</p>
      <p className={styles.meta}>
        Plantilla basada en el panel legado de BootstrapDash migrada a componentes reutilizables.
      </p>
    </footer>
  )
}
