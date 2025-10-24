import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardPage } from './components/dashboard/DashboardPage'
import { LayoutShell } from './components/layout/LayoutShell'

function NotFoundPage() {
  return (
    <div role="alert">
      <h1>Página no encontrada</h1>
      <p>La ruta solicitada no existe o fue movida.</p>
    </div>
  )
}

interface PlaceholderPageProps {
  title: string
  description: string
}

interface PlaceholderRoute extends PlaceholderPageProps {
  path: string
}

function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  const normalizedTitle = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
  const headingId = `placeholder-${normalizedTitle.trim().replace(/[\s-]+/g, '-')}`

  return (
    <section aria-labelledby={headingId}>
      <h1 id={headingId}>{title}</h1>
      <p>{description}</p>
      <p>Estamos preparando este módulo para la nueva experiencia en React.</p>
    </section>
  )
}

const placeholderRoutes: PlaceholderRoute[] = [
  {
    path: 'ui/buttons',
    title: 'Catálogo de botones',
    description: 'Revisa la próxima versión de los estilos y estados para botones del sistema.',
  },
  {
    path: 'ui/dropdowns',
    title: 'Componentes dropdown',
    description: 'Explora los menús desplegables y selectores que estamos adaptando a React.',
  },
  {
    path: 'ui/typography',
    title: 'Guía tipográfica',
    description: 'Consulta la guía de tipografías y escalas adaptadas a la app clínica.',
  },
  {
    path: 'ui/iconography',
    title: 'Catálogo de iconografía',
    description: 'Visualiza el inventario de iconos estandarizados para la interfaz.',
  },
  {
    path: 'patients',
    title: 'Listado de pacientes',
    description: 'Gestiona la base de pacientes con filtros y vistas resumidas.',
  },
  {
    path: 'patients/new',
    title: 'Registrar paciente',
    description: 'Completa los datos clínicos para dar de alta un nuevo paciente.',
  },
  {
    path: 'analytics',
    title: 'Panel de analíticas',
    description: 'Consulta métricas de desempeño y reportes consolidados.',
  },
  {
    path: 'docs',
    title: 'Documentación interna',
    description: 'Encuentra guías y manuales operativos del sistema.',
  },
  {
    path: 'status',
    title: 'Estado del sistema',
    description: 'Monitorea la disponibilidad y mantenimiento programado.',
  },
]

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutShell />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        {placeholderRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PlaceholderPage title={route.title} description={route.description} />}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
