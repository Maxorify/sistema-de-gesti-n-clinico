import type { ReactNode } from 'react'
import { SidebarNav } from './SidebarNav'
import { TopBar } from './TopBar'
import { Footer } from './Footer'
import styles from './LayoutShell.module.scss'

export interface LayoutShellProps {
  children: ReactNode
}

const defaultUser = {
  name: 'Dra. Valeria Rivas',
  greeting: 'Buenos días',
  subtitle: 'Resumen de tu actividad clínica de la semana',
}

export function LayoutShell({ children }: LayoutShellProps) {
  return (
    <div className={styles.layout}>
      <SidebarNav className={styles.sidebar} />
      <div className={styles.workspace}>
        <TopBar
          className={styles.topbar}
          greeting={`${defaultUser.greeting},`}
          userName={defaultUser.name}
          subtitle={defaultUser.subtitle}
        />
        <main className={styles.mainContent} role="main">
          {children}
        </main>
        <Footer className={styles.footer} />
      </div>
    </div>
  )
}
