"use client";
import Link from 'next/link';
import Navigation from './Navigation';
import { useAuth } from '@/components/AuthProvider'
import { createClient } from '@/lib/supabase/client'

export default function Header() {
  const { user, loading } = useAuth()
  // Supabase 환경변수가 없는 경우를 고려한 가드 처리
  const hasSupabase = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
  const supabase = hasSupabase ? createClient() : null

  const handleSignOut = async () => {
    if (!supabase) return
    await supabase.auth.signOut()
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            Easy Count
          </Link>
          <div className="flex items-center gap-4">
            <Navigation />
            {loading ? (
              <div className="text-gray-400">로딩중...</div>
            ) : user ? (
              <div className="flex items-center gap-4">
                <Link href="/history" className="text-gray-700 hover:text-indigo-600">
                  기록
                </Link>
                <span className="text-sm text-gray-600">{user.email}</span>
                <button onClick={handleSignOut} className="text-sm text-gray-700 hover:text-red-600">
                  로그아웃
                </button>
              </div>
            ) : (
              hasSupabase ? (
                <Link href="/auth" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                  로그인
                </Link>
              ) : (
                <span className="text-sm text-gray-500">인증 비활성화</span>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

