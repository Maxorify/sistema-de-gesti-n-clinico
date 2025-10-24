import styles from './TopBar.module.scss'

export interface TopBarProps {
  className?: string
  greeting: string
  userName: string
  subtitle?: string
}

export function TopBar({ className, greeting, userName, subtitle }: TopBarProps) {
  const topbarClassName = className ? `${styles.topbar} ${className}` : styles.topbar

  return (
    <header className={topbarClassName}>
      <div className={styles.welcomeCopy}>
        <p className={styles.greeting}>
          <span className={styles.greetingLabel}>{greeting}</span>{' '}
          <span className={styles.greetingName}>{userName}</span>
        </p>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.secondaryAction}>
          Ver agenda de hoy
        </button>
        <button type="button" className={styles.primaryAction}>
          Crear registro
        </button>
      </div>
    </header>
  )
}
