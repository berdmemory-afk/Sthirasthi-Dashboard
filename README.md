# Sthirasthi Dashboard - Real Estate CRM

A comprehensive Customer Relationship Management (CRM) system designed specifically for real estate companies operating in Hyderabad, India. This dashboard addresses the unique challenges of the Indian real estate market, including RERA compliance, complex negotiation cycles, and multi-stage payment processes.

## 🚀 Features

### Core Functionality
- **Authentication System**: Secure JWT-based login with role-based access control
- **Dashboard**: Real-time metrics, sales pipeline visualization, and activity tracking
- **Lead Management**: Complete lead lifecycle from suspect to converted customer
- **Activity Management**: Schedule and track meetings, site visits, and follow-ups
- **Role-Based Access**: Admin, Sales Executive, and Manager roles with appropriate permissions

### Key Features
- 📊 **Real-time Dashboard**: Live metrics and performance indicators
- 🎯 **Lead Pipeline**: Visual tracking of leads through sales stages
- 📅 **Activity Calendar**: Schedule and manage sales activities
- 👥 **User Management**: Multi-role support with permission controls
- 📱 **Mobile Responsive**: Works seamlessly on desktop, tablet, and mobile
- 🎨 **Professional UI**: Modern design with Tailwind CSS and shadcn/ui

## 🛠 Technology Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: Zustand
- **Icons**: Lucide React

### Backend
- **API**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT tokens
- **Validation**: Zod schemas

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/berdmemory-afk/Sthirasthi-Dashboard.git
   cd Sthirasthi-Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your database connection and JWT secrets in `.env.local`

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Seed the database (optional)**
   ```bash
   npm run seed
   ```

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Default Login Credentials

- **Email**: admin@crm.com
- **Password**: admin123

## 📋 Available Pages

- `/auth/login` - Login page
- `/dashboard` - Main dashboard with metrics and charts
- `/leads` - Lead management interface
- `/activities` - Activity scheduling and tracking

## 🎯 User Roles

### Admin
- Full system access
- User management
- Global reporting and analytics

### Sales Executive
- Manage assigned leads
- Schedule and track activities
- Update lead status and information

### Manager
- View team performance
- Lead assignment and distribution
- Pipeline monitoring and reporting

## 🏗 Project Structure

```
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── api/            # API routes
│   │   ├── auth/           # Authentication pages
│   │   ├── dashboard/      # Dashboard page
│   │   ├── leads/          # Lead management
│   │   └── activities/     # Activity management
│   ├── components/         # Reusable React components
│   │   ├── layout/         # Layout components
│   │   └── ui/             # shadcn/ui components
│   ├── services/           # API service functions
│   ├── stores/             # Zustand state management
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
└── README.md
```

## 🚀 Getting Started

1. **Login**: Use the default credentials to access the system
2. **Explore Dashboard**: View real-time metrics and sales pipeline
3. **Manage Leads**: Create, update, and track leads through the sales process
4. **Schedule Activities**: Plan meetings, site visits, and follow-ups
5. **Monitor Performance**: Track conversion rates and team productivity

## 🎨 UI/UX Features

- **Responsive Design**: Optimized for all device sizes
- **Dark Mode Support**: Easy on the eyes during extended use
- **Interactive Charts**: Visual representation of sales data
- **Smooth Animations**: Professional transitions and micro-interactions
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📊 Key Metrics Tracked

- Lead conversion rates
- Sales pipeline value
- Activity completion rates
- Team performance metrics
- Revenue tracking
- Customer acquisition costs

## 🔒 Security Features

- JWT-based authentication
- Role-based access control
- Input validation and sanitization
- SQL injection prevention
- XSS protection

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Docker
```bash
docker build -t sthirasthi-dashboard .
docker run -p 3000:3000 sthirasthi-dashboard
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)

## 📞 Support

For support and questions, please open an issue in the GitHub repository.

---

**Sthirasthi Dashboard** - Empowering real estate teams to build stronger customer relationships and drive sales growth.