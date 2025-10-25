export interface Meeting {
  id: string
  lead: Lead
  project?: Project
  type: MeetingType
  propertyDetails?: PropertyDetails
  objections?: Objection[]
  resolutions?: Resolution[]
  referrals?: Referral[]
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export type MeetingType = 'first_meet' | 'second_meet'

export interface PropertyDetails {
  location: string
  size: number
  pricePerSqft: number
  totalPrice: number
}

export interface Objection {
  id: string
  category: ObjectionCategory
  description: string
  status: 'open' | 'addressed' | 'resolved'
}

export type ObjectionCategory = 
  | 'price'
  | 'location'
  | 'traffic'
  | 'compliance'
  | 'builder_reputation'
  | 'amenities'
  | 'other'

export interface Resolution {
  objectionId: string
  status: 'resolved' | 'partially_resolved'
  resolution: string
}

export interface Referral {
  name: string
  phone: string
  email?: string
}

export interface CreateMeetingRequest {
  leadId: string
  projectId?: string
  type: MeetingType
  propertyDetails?: PropertyDetails
  objections?: Objection[]
  notes?: string
}

export interface UpdateMeetingRequest {
  type?: MeetingType
  propertyDetails?: PropertyDetails
  objections?: Objection[]
  resolutions?: Resolution[]
  referrals?: Referral[]
  notes?: string
}