import { createBrowserClient } from '@supabase/ssr'

// 브라우저 환경에서 사용할 Supabase 클라이언트 생성 함수
// 환경변수가 없으면 오류 대신 명시적 예외를 던져 상위에서 가드하도록 함
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anon) {
    throw new Error(
      'Supabase 환경변수가 설정되지 않았습니다. .env.local에 NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY를 추가하세요.'
    )
  }

  return createBrowserClient(url, anon)
}



