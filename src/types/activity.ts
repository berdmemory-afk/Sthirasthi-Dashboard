export interface Activity {
  id: string
  lead: Lead
  user: User
  type: ActivityType
  dateTimeFrom: Date
  dateTimeTo: Date
  location?: string
  notes?: string
  status: ActivityStatus
  completedAt?: Date
  createdAt: Date
  updatedAt: Date
}

export type ActivityType = 
  | 'marketing_call'
  | 'follow_up_call'
  | 'first_meet'
  | 'second_meet'
  | 'site_visit'
  | 'registration_appointment'

export type ActivityStatus = 'scheduled' | 'completed' | 'cancelled'

export interface CreateActivityRequest {
  leadId: string
  type: ActivityType
  dateTimeFrom: Date
  dateTimeTo: Date
  location?: string
  notes?: string
}

export interface UpdateActivityRequest {
  type?: ActivityType
  dateTimeFrom?: Date
  dateTimeTo?: Date
  location?: string
  notes?: string
  status?: ActivityStatus
}

export interface ActivityListResponse {
  data: Activity[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ActivityFilters {
  leadId?: string
  userId?: string
  type?: ActivityType
  status?: ActivityStatus
  dateFrom?: Date
  dateTo?: Date
}