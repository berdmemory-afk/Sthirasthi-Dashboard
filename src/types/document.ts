export interface Document {
  id: string
  registration: Registration
  type: DocumentType
  filePath: string
  fileName: string
  fileSize?: number
  mimeType?: string
  status: DocumentStatus
  verifiedBy?: User
  verifiedAt?: Date
  rejectionReason?: string
  createdAt: Date
  updatedAt: Date
}

export type DocumentType = 
  | 'aadhaar'
  | 'pan'
  | 'noc'
  | 'sale_agreement'
  | 'sale_deed'
  | 'payment_receipt'
  | 'other'

export type DocumentStatus = 'pending' | 'uploaded' | 'verified' | 'rejected'

export interface CreateDocumentRequest {
  registrationId: string
  type: DocumentType
  file: File
}

export interface UpdateDocumentRequest {
  status?: DocumentStatus
  rejectionReason?: string
}

export interface DocumentVerificationRequest {
  status: DocumentStatus
  rejectionReason?: string
}