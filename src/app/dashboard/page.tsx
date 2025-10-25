'use client'

import { useEffect } from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Users, 
  Calendar, 
  Building, 
  TrendingUp,
  Phone,
  Mail,
  Clock,
  CheckCircle
} from 'lucide-react'

export default function DashboardPage() {
  // Mock data for demonstration
  const stats = {
    totalLeads: 156,
    newLeads: 23,
    qualifiedLeads: 45,
    convertedThisMonth: 8,
    revenueThisMonth: 2800000,
    activitiesToday: 12,
    overdueActivities: 3,
  }

  const recentLeads = [
    {
      id: '1',
      name: 'Sunita Kumar',
      email: 'sunita.k@email.com',
      phone: '9876543210',
      budget: 7000000,
      status: 'qualified' as const,
      createdAt: new Date('2024-01-20'),
    },
    {
      id: '2',
      name: 'Rajesh Sharma',
      email: 'rajesh.s@email.com',
      phone: '9876543211',
      budget: 8500000,
      status: 'new' as const,
      createdAt: new Date('2024-01-21'),
    },
    {
      id: '3',
      name: 'Priya Reddy',
      email: 'priya.r@email.com',
      phone: '9876543212',
      budget: 5500000,
      status: 'contacted' as const,
      createdAt: new Date('2024-01-19'),
    },
  ]

  const todayActivities = [
    {
      id: '1',
      type: 'site_visit',
      leadName: 'Sunita Kumar',
      time: '10:00 AM',
      location: 'Prestige Lakeside, Gachibowli',
      status: 'scheduled' as const,
    },
    {
      id: '2',
      type: 'follow_up_call',
      leadName: 'Rajesh Sharma',
      time: '2:00 PM',
      status: 'scheduled' as const,
    },
    {
      id: '3',
      type: 'first_meet',
      leadName: 'Priya Reddy',
      time: '4:00 PM',
      location: 'Office',
      status: 'completed' as const,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800'
      case 'qualified':
        return 'bg-green-100 text-green-800'
      case 'converted':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'site_visit':
        return Building
      case 'follow_up_call':
        return Phone
      case 'first_meet':
        return Users
      default:
        return Calendar
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your real estate CRM.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalLeads}</div>
              <p className="text-xs text-muted-foreground">
                +{stats.newLeads} new this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Qualified Leads</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.qualifiedLeads}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Converted This Month</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.convertedThisMonth}</div>
              <p className="text-xs text-muted-foreground">
                ₹{(stats.revenueThisMonth / 100000).toFixed(1)}L revenue
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Activities</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activitiesToday}</div>
              <p className="text-xs text-muted-foreground">
                {stats.overdueActivities} overdue
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent Leads */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Leads</CardTitle>
              <CardDescription>
                Latest leads added to the system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {lead.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {lead.email} • {lead.phone}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        ₹{(lead.budget / 100000).toFixed(1)}L
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Today's Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>
                Your activities for today
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayActivities.map((activity) => {
                  const Icon = getActivityIcon(activity.type)
                  return (
                    <div key={activity.id} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {activity.leadName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {activity.time}
                          {activity.location && ` • ${activity.location}`}
                        </p>
                      </div>
                      <Badge 
                        variant={activity.status === 'completed' ? 'default' : 'secondary'}
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pipeline Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Pipeline</CardTitle>
            <CardDescription>
              Current status of leads in your pipeline
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>New Leads</span>
                  <span>23</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Contacted</span>
                  <span>18</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Qualified</span>
                  <span>12</span>
                </div>
                <Progress value={52} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Negotiation</span>
                  <span>8</span>
                </div>
                <Progress value={35} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Converted</span>
                  <span>8</span>
                </div>
                <Progress value={35} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}