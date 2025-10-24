import { NavLink } from 'react-router-dom'
import brandLogo from '../../assets/brand-logo.svg'
import brandMark from '../../assets/brand-mark.svg'
import styles from './SidebarNav.module.scss'

type SidebarLink = {
  label: string
  to: string
  description?: string
}

type NavGroup = {
  id: string
  label: string
  links: SidebarLink[]
}

const NAVIGATION: NavGroup[] = [
  {
    id: 'overview',
    label: 'General',
    links: [
      { label: 'Panel principal', to: '/dashboard', description: 'Indicadores clave y pendientes del día' },
    ],
  },
  {
    id: 'ui-elements',
    label: 'Biblioteca UI',
    links: [
      { label: 'Botones', to: '/ui/buttons' },
      { label: 'Dropdowns', to: '/ui/dropdowns' },
      { label: 'Tipografía', to: '/ui/typography' },
      { label: 'Iconografía', to: '/ui/iconography' },
    ],
  },
  {
    id: 'records',
    label: 'Gestión clínica',
    links: [
      { label: 'Pacientes', to: '/patients' },
      { label: 'Registrar paciente', to: '/patients/new' },
      { label: 'Reportes', to: '/analytics' },
    ],
  },
  {
    id: 'support',
    label: 'Soporte',
    links: [
      { label: 'Documentación', to: '/docs' },
      { label: 'Estado del sistema', to: '/status' },
    ],
  },
]

export interface SidebarNavProps {
  className?: string
}

function buildLinkClassName(isActive: boolean) {
  const activeClassName = styles.linkActive ?? ''
  const classes = [styles.link]

  if (isActive && activeClassName) {
    classes.push(activeClassName)
  }

  return classes.join(' ')
}

export function SidebarNav({ className }: SidebarNavProps) {
  const sidebarClassName = className ? `${styles.sidebar} ${className}` : styles.sidebar

  return (
    <aside className={sidebarClassName}>
      <div className={styles.brand}>
        <img className={styles.brandMark} src={brandMark} alt="Mi Clínica" />
        <img className={styles.brandLogo} src={brandLogo} alt="Mi Clínica" />
      </div>
      <nav aria-label="Navegación principal" className={styles.navigation}>
        {NAVIGATION.map((group) => (
          <div key={group.id} className={styles.group}>
            <p className={styles.groupLabel}>{group.label}</p>
            <ul className={styles.linkList}>
              {group.links.map((link) => (
                <li key={link.label} className={styles.linkItem}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => buildLinkClassName(isActive)}
                    end={link.to === '/dashboard'}
                  >
                    <span className={styles.linkText}>{link.label}</span>
                    {link.description ? (
                      <span className={styles.linkDescription}>{link.description}</span>
                    ) : null}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
