import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

// Mock user data
const mockUsers = [
  {
    id: '1',
    email: 'admin@crm.com',
    password: 'admin123',
    name: 'Admin User',
    phone: '9876543210',
    role: {
      id: '1',
      name: 'admin',
      permissions: ['all'],
    },
  },
  {
    id: '2',
    email: 'rajesh@crm.com',
    password: 'rajesh123',
    name: 'Rajesh Kumar',
    phone: '9876543211',
    role: {
      id: '2',
      name: 'sales_executive',
      permissions: ['leads:read', 'leads:write', 'activities:read', 'activities:write'],
    },
  },
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = loginSchema.parse(body)

    // Find user by email
    const user = mockUsers.find(u => u.email === email)
    
    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Create mock tokens
    const accessToken = 'mock-access-token-' + Date.now()
    const refreshToken = 'mock-refresh-token-' + Date.now()

    // Return user data without password
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      user: userWithoutPassword,
      accessToken,
      refreshToken,
      tokenType: 'Bearer',
      expiresIn: 3600,
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}