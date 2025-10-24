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

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutShell />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
