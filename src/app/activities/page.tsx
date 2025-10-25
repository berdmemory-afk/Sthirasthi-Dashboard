'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Plus, Calendar, Clock, MapPin, CheckCircle, XCircle } from 'lucide-react'
import { Activity, ActivityStatus, ActivityType } from '@/types/activity'

// Mock data for demonstration
const mockActivities: Activity[] = [
  {
    id: '1',
    lead: {
      id: '1',
      name: 'Sunita Kumar',
      email: 'sunita.k@email.com',
      phone: '9876543210',
      status: 'qualified',
      type: 'prospect',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    user: {
      id: '1',
      email: 'rajesh@crm.com',
      name: 'Rajesh Kumar',
      phone: '9876543211',
      role: {
        id: '2',
        name: 'sales_executive',
        permissions: [],
      },
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    type: 'site_visit',
    dateTimeFrom: new Date('2024-01-22T10:00:00'),
    dateTimeTo: new Date('2024-01-22T11:00:00'),
    location: 'Prestige Lakeside, Gachibowli',
    notes: 'Show 2BHK units, discuss amenities',
    status: 'scheduled',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: '2',
    lead: {
      id: '2',
      name: 'Rajesh Sharma',
      email: 'rajesh.s@email.com',
      phone: '9876543211',
      status: 'new',
      type: 'suspect',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    user: {
      id: '1',
      email: 'rajesh@crm.com',
      name: 'Rajesh Kumar',
      phone: '9876543211',
      role: {
        id: '2',
        name: 'sales_executive',
        permissions: [],
      },
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    type: 'follow_up_call',
    dateTimeFrom: new Date('2024-01-22T14:00:00'),
    dateTimeTo: new Date('2024-01-22T14:30:00'),
    notes: 'Follow up on initial inquiry',
    status: 'scheduled',
    createdAt: new Date('2024-01-21'),
    updatedAt: new Date('2024-01-21'),
  },
  {
    id: '3',
    lead: {
      id: '3',
      name: 'Priya Reddy',
      email: 'priya.r@email.com',
      phone: '9876543212',
      status: 'contacted',
      type: 'prospect',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    user: {
      id: '1',
      email: 'rajesh@crm.com',
      name: 'Rajesh Kumar',
      phone: '9876543211',
      role: {
        id: '2',
        name: 'sales_executive',
        permissions: [],
      },
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    type: 'first_meet',
    dateTimeFrom: new Date('2024-01-21T16:00:00'),
    dateTimeTo: new Date('2024-01-21T17:00:00'),
    location: 'Office',
    notes: 'Discuss requirements and budget',
    status: 'completed',
    completedAt: new Date('2024-01-21T17:00:00'),
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-21'),
  },
]

export default function ActivitiesPage() {
  const [activities] = useState<Activity[]>(mockActivities)
  const [statusFilter, setStatusFilter] = useState<ActivityStatus | 'all'>('all')
  const [typeFilter, setTypeFilter] = useState<ActivityType | 'all'>('all')

  const getStatusColor = (status: ActivityStatus) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeColor = (type: ActivityType) => {
    switch (type) {
      case 'marketing_call':
        return 'bg-purple-100 text-purple-800'
      case 'follow_up_call':
        return 'bg-yellow-100 text-yellow-800'
      case 'first_meet':
        return 'bg-green-100 text-green-800'
      case 'second_meet':
        return 'bg-blue-100 text-blue-800'
      case 'site_visit':
        return 'bg-orange-100 text-orange-800'
      case 'registration_appointment':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeLabel = (type: ActivityType) => {
    switch (type) {
      case 'marketing_call':
        return 'Marketing Call'
      case 'follow_up_call':
        return 'Follow-up Call'
      case 'first_meet':
        return 'First Meet'
      case 'second_meet':
        return 'Second Meet'
      case 'site_visit':
        return 'Site Visit'
      case 'registration_appointment':
        return 'Registration'
      default:
        return type
    }
  }

  const filteredActivities = activities.filter(activity => {
    const matchesStatus = statusFilter === 'all' || activity.status === statusFilter
    const matchesType = typeFilter === 'all' || activity.type === typeFilter
    
    return matchesStatus && matchesType
  })

  const todayActivities = filteredActivities.filter(activity => {
    const today = new Date()
    const activityDate = new Date(activity.dateTimeFrom)
    return activityDate.toDateString() === today.toDateString()
  })

  const upcomingActivities = filteredActivities.filter(activity => {
    return activity.status === 'scheduled' && new Date(activity.dateTimeFrom) > new Date()
  })

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Activities</h1>
            <p className="text-muted-foreground">
              Manage your schedule and track all customer interactions.
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Schedule Activity
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Activities</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todayActivities.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingActivities.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {activities.filter(a => a.status === 'completed').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {activities.length > 0 
                  ? Math.round((activities.filter(a => a.status === 'completed').length / activities.length) * 100)
                  : 0}%
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>
              Your activities for {new Date().toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {todayActivities.length > 0 ? (
              <div className="space-y-4">
                {todayActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">{activity.lead.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {activity.dateTimeFrom.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
                          {activity.dateTimeTo.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        {activity.location && (
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {activity.location}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getTypeColor(activity.type)}>
                        {getTypeLabel(activity.type)}
                      </Badge>
                      <Badge className={getStatusColor(activity.status)}>
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No activities scheduled for today
              </div>
            )}
          </CardContent>
        </Card>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 items-center">
              <Select value={statusFilter} onValueChange={(value: ActivityStatus | 'all') => setStatusFilter(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={(value: ActivityType | 'all') => setTypeFilter(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="marketing_call">Marketing Call</SelectItem>
                  <SelectItem value="follow_up_call">Follow-up Call</SelectItem>
                  <SelectItem value="first_meet">First Meet</SelectItem>
                  <SelectItem value="second_meet">Second Meet</SelectItem>
                  <SelectItem value="site_visit">Site Visit</SelectItem>
                  <SelectItem value="registration_appointment">Registration</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Activities Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Activities</CardTitle>
            <CardDescription>
              Showing {filteredActivities.length} of {activities.length} activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Lead</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredActivities.map((activity) => (
                  <TableRow key={activity.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="font-medium">{activity.lead.name}</TableCell>
                    <TableCell>
                      <Badge className={getTypeColor(activity.type)}>
                        {getTypeLabel(activity.type)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div>{activity.dateTimeFrom.toLocaleDateString()}</div>
                        <div className="text-sm text-muted-foreground">
                          {activity.dateTimeFrom.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
                          {activity.dateTimeTo.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {activity.location ? (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm">{activity.location}</span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(activity.status)}>
                        {activity.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{activity.user.name}</TableCell>
                    <TableCell className="max-w-xs truncate">
                      {activity.notes || '-'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}