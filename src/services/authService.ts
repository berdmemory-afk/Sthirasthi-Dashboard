import api from './api'
import { LoginRequest, LoginResponse, RegisterRequest } from '@/types/auth'

export const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await api.post('/auth/login', credentials)
    const data = response.data

    // Store tokens
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)

    return data
  },

  async register(userData: RegisterRequest) {
    const response = await api.post('/auth/register', userData)
    return response.data
  },

  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout')
    } finally {
      // Clear tokens regardless of API call success
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    }
  },

  async refreshToken(): Promise<{ accessToken: string }> {
    const refreshToken = localStorage.getItem('refreshToken')
    if (!refreshToken) {
      throw new Error('No refresh token available')
    }

    const response = await api.post('/auth/refresh', { refreshToken })
    const data = response.data

    localStorage.setItem('accessToken', data.accessToken)
    return data
  },

  async getCurrentUser() {
    const response = await api.get('/auth/me')
    return response.data
  },
}