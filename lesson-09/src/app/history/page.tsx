'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/components/AuthProvider'
import { useRouter } from 'next/navigation'
import { getCalculations, deleteCalculation } from '@/lib/database/calculations'
import { formatDate } from '@/lib/utils/format'

export default function HistoryPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [calculations, setCalculations] = useState<any[]>([])
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth')
    } else if (user) {
      loadData()
    }
  }, [user, loading, router])

  const loadData = async () => {
    try {
      const data = await getCalculations()
      setCalculations(data || [])
    } catch (error) {
      console.error('Error loading calculations:', error)
    } finally {
      setLoadingData(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    try {
      await deleteCalculation(id)
      loadData()
    } catch (error) {
      console.error('Error deleting:', error)
      alert('삭제 실패')
    }
  }

  if (loading || loadingData) {
    return <div className="container mx-auto px-4 py-16 text-center">로딩중...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">계산 기록</h1>

      {calculations.length === 0 ? (
        <div className="text-center text-gray-500 py-16">
          저장된 계산 기록이 없습니다.
        </div>
      ) : (
        <div className="space-y-4">
          {calculations.map((calc) => (
            <div key={calc.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                      {calc.calculator_type}
                    </span>
                    <span className="text-sm text-gray-500">
                      {formatDate(new Date(calc.created_at))}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2">{calc.title}</h3>
                  <pre className="text-sm bg-gray-50 p-3 rounded overflow-x-auto">
                    {JSON.stringify(calc.result_data, null, 2)}
                  </pre>
                </div>
                <button
                  onClick={() => handleDelete(calc.id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  🗑️ 삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}



