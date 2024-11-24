'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import DashboardView from '../_components/dashboard/DashboardView'
import LoginForm from '../_components/auth/LoginForm'

export default function DashboardPage() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-background">
      <h1 className="text-3xl font-bold mb-8">Portfolio Dashboard</h1>
      {isAuthenticated ? <DashboardView /> : <LoginForm />}
    </section>
  )
}
