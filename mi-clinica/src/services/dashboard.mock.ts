export type TrendDirection = 'up' | 'down'
export type TrendTone = 'positive' | 'negative'

export interface KpiCard {
  id: string
  title: string
  value: string
  change: {
    value: string
    direction: TrendDirection
    tone: TrendTone
  }
}

export interface MarketOverviewDataset {
  label: string
  data: number[]
  backgroundColor: string
  borderColor: string
  borderWidth?: number
}

export interface MarketOverviewData {
  title: string
  subtitle: string
  currency: string
  total: number
  change: number
  labels: string[]
  datasets: MarketOverviewDataset[]
}

export interface PendingRequest {
  id: string
  customer: {
    name: string
    role: string
    initials: string
    color: string
  }
  company: {
    name: string
    type: string
  }
  progress: {
    completed: number
    total: number
  }
  status: 'pending' | 'in_progress' | 'completed'
}

export interface TodoItem {
  id: string
  title: string
  date: string
  status: 'due' | 'done' | 'expired'
}

export interface RevenueSlice {
  label: string
  value: number
  color: string
}

export interface LeaveReportPoint {
  label: string
  taken: number
  available: number
}

export interface DashboardMock {
  kpis: KpiCard[]
  marketOverview: MarketOverviewData
  pendingRequests: PendingRequest[]
  todo: TodoItem[]
  revenueByType: RevenueSlice[]
  leaveReport: LeaveReportPoint[]
}

const dashboardMock: DashboardMock = {
  kpis: [
    {
      id: 'bounce-rate',
      title: 'Bounce Rate',
      value: '32.53%',
      change: {
        value: '-0.5%',
        direction: 'down',
        tone: 'negative',
      },
    },
    {
      id: 'page-views',
      title: 'Page Views',
      value: '7,682',
      change: {
        value: '+0.1%',
        direction: 'up',
        tone: 'positive',
      },
    },
    {
      id: 'new-sessions',
      title: 'New Sessions',
      value: '68.8%',
      change: {
        value: '-2.4%',
        direction: 'down',
        tone: 'negative',
      },
    },
    {
      id: 'avg-time',
      title: 'Avg. Time on Site',
      value: '2m:35s',
      change: {
        value: '+0.8%',
        direction: 'up',
        tone: 'positive',
      },
    },
  ],
  marketOverview: {
    title: 'Market Overview',
    subtitle: 'Resumen de ingresos mensuales',
    currency: 'USD',
    total: 362531,
    change: 1.37,
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Nuevos pacientes',
        data: [220, 260, 245, 300, 320, 290, 335, 360, 340, 310, 295, 325],
        backgroundColor: 'rgba(79, 70, 229, 0.85)',
        borderColor: 'rgba(79, 70, 229, 1)',
      },
      {
        label: 'Consultas de seguimiento',
        data: [140, 160, 150, 170, 180, 190, 200, 205, 198, 210, 220, 230],
        backgroundColor: 'rgba(16, 185, 129, 0.85)',
        borderColor: 'rgba(16, 185, 129, 1)',
      },
    ],
  },
  pendingRequests: [
    {
      id: 'req-1',
      customer: {
        name: 'Brandon Washington',
        role: 'Administrador',
        initials: 'BW',
        color: '#c7d2fe',
      },
      company: {
        name: 'Clínica Norte',
        type: 'Pediatría',
      },
      progress: {
        completed: 138,
        total: 162,
      },
      status: 'in_progress',
    },
    {
      id: 'req-2',
      customer: {
        name: 'Laura Brooks',
        role: 'Coordinadora',
        initials: 'LB',
        color: '#bbf7d0',
      },
      company: {
        name: 'Salud Integral',
        type: 'Medicina familiar',
      },
      progress: {
        completed: 105,
        total: 162,
      },
      status: 'in_progress',
    },
    {
      id: 'req-3',
      customer: {
        name: 'Wayne Murphy',
        role: 'Supervisor',
        initials: 'WM',
        color: '#fde68a',
      },
      company: {
        name: 'Cuidados Express',
        type: 'Urgencias',
      },
      progress: {
        completed: 61,
        total: 162,
      },
      status: 'pending',
    },
    {
      id: 'req-4',
      customer: {
        name: 'Matthew Bailey',
        role: 'Administrador',
        initials: 'MB',
        color: '#fecdd3',
      },
      company: {
        name: 'Centro Esperanza',
        type: 'Cardiología',
      },
      progress: {
        completed: 24,
        total: 162,
      },
      status: 'pending',
    },
    {
      id: 'req-5',
      customer: {
        name: 'Katherine Butler',
        role: 'Directora',
        initials: 'KB',
        color: '#d9f99d',
      },
      company: {
        name: 'Vida Plena',
        type: 'Rehabilitación',
      },
      progress: {
        completed: 142,
        total: 162,
      },
      status: 'completed',
    },
  ],
  todo: [
    {
      id: 'todo-1',
      title: 'Enviar recordatorios de vacunación',
      date: '24 Jun 2024',
      status: 'due',
    },
    {
      id: 'todo-2',
      title: 'Actualizar inventario de farmacia',
      date: '23 Jun 2024',
      status: 'done',
    },
    {
      id: 'todo-3',
      title: 'Revisión mensual de facturación',
      date: '22 Jun 2024',
      status: 'done',
    },
    {
      id: 'todo-4',
      title: 'Firmar contratos con proveedores',
      date: '20 Jun 2024',
      status: 'expired',
    },
  ],
  revenueByType: [
    { label: 'Consultas', value: 42, color: '#4f46e5' },
    { label: 'Laboratorio', value: 25, color: '#14b8a6' },
    { label: 'Imagenología', value: 18, color: '#f97316' },
    { label: 'Farmacia', value: 15, color: '#facc15' },
  ],
  leaveReport: [
    { label: 'Ene', taken: 4, available: 18 },
    { label: 'Feb', taken: 6, available: 18 },
    { label: 'Mar', taken: 3, available: 19 },
    { label: 'Abr', taken: 8, available: 17 },
    { label: 'May', taken: 5, available: 19 },
    { label: 'Jun', taken: 7, available: 18 },
    { label: 'Jul', taken: 6, available: 19 },
  ],
}

export default dashboardMock
