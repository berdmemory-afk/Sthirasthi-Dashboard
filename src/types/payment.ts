export interface Payment {
  id: string
  lead: Lead
  project?: Project
  extent?: number
  totalCost: number
  advancePaid: number
  advanceDate: Date
  balance: number
  schedule: PaymentSchedule[]
  paymentMethod?: string
  createdAt: Date
  updatedAt: Date
}

export interface PaymentSchedule {
  milestone: string
  percentage: number
  amount: number
  dueDate: Date
  status: 'pending' | 'paid' | 'overdue'
}

export interface CreatePaymentRequest {
  leadId: string
  projectId?: string
  extent?: number
  totalCost: number
  advancePaid: number
  advanceDate: Date
  schedule: PaymentSchedule[]
  paymentMethod?: string
}

export interface UpdatePaymentRequest {
  extent?: number
  totalCost?: number
  advancePaid?: number
  advanceDate?: Date
  schedule?: PaymentSchedule[]
  paymentMethod?: string
}