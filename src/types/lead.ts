export interface Lead {
  id: string
  name: string
  email?: string
  phone: string
  budget?: number
  locationPreference?: string
  investmentTimeline?: string
  status: LeadStatus
  type: LeadType
  source?: string
  assignedTo?: User
  postponedUntil?: Date
  lostReason?: string
  createdAt: Date
  updatedAt: Date
}

export type LeadStatus = 
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'negotiation'
  | 'converted'
  | 'lost'
  | 'postponed'

export type LeadType = 'suspect' | 'prospect'

export interface CreateLeadRequest {
  name: string
  email?: string
  phone: string
  budget?: number
  locationPreference?: string
  investmentTimeline?: string
  source?: string
}

export interface UpdateLeadRequest {
  name?: string
  email?: string
  phone?: string
  budget?: number
  locationPreference?: string
  investmentTimeline?: string
  status?: LeadStatus
  type?: LeadType
  source?: string
  assignedTo?: string
  postponedUntil?: Date
  lostReason?: string
}

export interface LeadListResponse {
  data: Lead[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface LeadFilters {
  status?: LeadStatus
  type?: LeadType
  assignedTo?: string
  search?: string
}