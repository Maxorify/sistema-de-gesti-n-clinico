import { Outlet } from 'react-router-dom'
import { SidebarNav } from './SidebarNav'
import { TopBar } from './TopBar'
import { Footer } from './Footer'
import styles from './LayoutShell.module.scss'

const defaultUser = {
  name: 'Dra. Valeria Rivas',
  greeting: 'Buenos días',
  subtitle: 'Resumen de tu actividad clínica de la semana',
}

export function LayoutShell() {
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
          <Outlet />
        </main>
        <Footer className={styles.footer} />
      </div>
    </div>
  )
}
