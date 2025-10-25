export interface Registration {
  id: string
  lead: Lead
  payment?: Payment
  clientName: string
  propertyName: string
  extent: number
  price: number
  nocStatus: string
  registrationDateTime?: Date
  subRegistrarOffice?: string
  documentNumber?: string
  deliveryDate?: Date
  status: RegistrationStatus
  createdAt: Date
  updatedAt: Date
}

export type RegistrationStatus = 
  | 'pending'
  | 'document_collection'
  | 'document_verification'
  | 'scheduled'
  | 'complete'
  | 'delivered'

export interface CreateRegistrationRequest {
  leadId: string
  paymentId?: string
  clientName: string
  propertyName: string
  extent: number
  price: number
  nocStatus: string
}

export interface UpdateRegistrationRequest {
  clientName?: string
  propertyName?: string
  extent?: number
  price?: number
  nocStatus?: string
  registrationDateTime?: Date
  subRegistrarOffice?: string
  documentNumber?: string
  deliveryDate?: Date
  status?: RegistrationStatus
}