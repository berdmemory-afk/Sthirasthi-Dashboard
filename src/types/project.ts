export interface Project {
  id: string
  name: string
  builder: string
  location: string
  address?: string
  pinCode?: string
  reraId: string
  reraRegistrationDate?: Date
  unitsTotal?: number
  unitsAvailable?: number
  unitTypes?: UnitType[]
  priceRangeMin?: number
  priceRangeMax?: number
  possessionDate?: Date
  amenities?: string[]
  nocStatus?: string
  documents?: string[]
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface UnitType {
  type: string
  size: number
  pricePerSqft: number
}

export interface CreateProjectRequest {
  name: string
  builder: string
  location: string
  address?: string
  pinCode?: string
  reraId: string
  reraRegistrationDate?: Date
  unitsTotal?: number
  unitsAvailable?: number
  unitTypes?: UnitType[]
  priceRangeMin?: number
  priceRangeMax?: number
  possessionDate?: Date
  amenities?: string[]
  nocStatus?: string
}

export interface UpdateProjectRequest {
  name?: string
  builder?: string
  location?: string
  address?: string
  pinCode?: string
  reraId?: string
  reraRegistrationDate?: Date
  unitsTotal?: number
  unitsAvailable?: number
  unitTypes?: UnitType[]
  priceRangeMin?: number
  priceRangeMax?: number
  possessionDate?: Date
  amenities?: string[]
  nocStatus?: string
  isActive?: boolean
}

export interface ProjectListResponse {
  data: Project[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ProjectFilters {
  location?: string
  budgetMin?: number
  budgetMax?: number
  isActive?: boolean
  search?: string
}