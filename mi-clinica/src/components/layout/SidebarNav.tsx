import brandLogo from '../../assets/brand-logo.svg'
import brandMark from '../../assets/brand-mark.svg'
import styles from './SidebarNav.module.scss'

type NavLink = {
  label: string
  to: string
  description?: string
}

type NavGroup = {
  id: string
  label: string
  links: NavLink[]
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
                  <a className={styles.link} href={link.to}>
                    <span className={styles.linkText}>{link.label}</span>
                    {link.description ? (
                      <span className={styles.linkDescription}>{link.description}</span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
