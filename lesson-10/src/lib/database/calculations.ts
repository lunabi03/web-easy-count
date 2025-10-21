import { createClient } from '@/lib/supabase/client'

// 계산 기록 저장
export async function saveCalculation(
  calculatorType: string,
  title: string,
  inputData: any,
  resultData: any
): Promise<any> {
  // 환경변수 없으면 저장 기능 비활성화
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('현재 환경에서 저장 기능이 비활성화되어 있습니다. Supabase 환경변수를 설정하세요.')
  }
  const supabase = createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('로그인이 필요합니다')

  const { data, error } = await supabase
    .from('calculations')
    .insert({
      user_id: user.id,
      calculator_type: calculatorType,
      title,
      input_data: inputData,
      result_data: resultData,
    })
    .select()
    .single()

  if (error) throw error
  return data
}

// 계산 기록 조회
export async function getCalculations(calculatorType?: string) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('현재 환경에서 조회 기능이 비활성화되어 있습니다. Supabase 환경변수를 설정하세요.')
  }
  const supabase = createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('로그인이 필요합니다')

  let query = supabase
    .from('calculations')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (calculatorType) {
    query = query.eq('calculator_type', calculatorType)
  }

  const { data, error } = await query
  if (error) throw error
  return data
}

// 계산 기록 삭제
export async function deleteCalculation(id: string) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('현재 환경에서 삭제 기능이 비활성화되어 있습니다. Supabase 환경변수를 설정하세요.')
  }
  const supabase = createClient()

  const { error } = await supabase
    .from('calculations')
    .delete()
    .eq('id', id)

  if (error) throw error
}



