-- ============================================
-- Easy Count - Supabase 데이터베이스 스키마
-- ============================================

-- 계산 기록 테이블 생성
CREATE TABLE calculations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  calculator_type VARCHAR(50) NOT NULL,
  title VARCHAR(255),
  input_data JSONB NOT NULL,
  result_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- 인덱스 생성 (빠른 검색을 위해)
CREATE INDEX idx_calculations_user_id ON calculations(user_id);
CREATE INDEX idx_calculations_type ON calculations(calculator_type);
CREATE INDEX idx_calculations_created_at ON calculations(created_at DESC);

-- updated_at 자동 업데이트 함수
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- updated_at 트리거
CREATE TRIGGER update_calculations_updated_at
BEFORE UPDATE ON calculations
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- ============================================
-- Row Level Security (RLS) 설정
-- ============================================

-- RLS 활성화
ALTER TABLE calculations ENABLE ROW LEVEL SECURITY;

-- 정책 1: 사용자는 자신의 계산만 조회
CREATE POLICY "Users can view own calculations"
  ON calculations
  FOR SELECT
  USING (auth.uid() = user_id);

-- 정책 2: 사용자는 자신의 계산만 추가
CREATE POLICY "Users can insert own calculations"
  ON calculations
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 정책 3: 사용자는 자신의 계산만 수정
CREATE POLICY "Users can update own calculations"
  ON calculations
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 정책 4: 사용자는 자신의 계산만 삭제
CREATE POLICY "Users can delete own calculations"
  ON calculations
  FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- 유용한 쿼리
-- ============================================

-- 모든 정책 확인
SELECT * FROM pg_policies WHERE tablename = 'calculations';

-- 현재 사용자 ID 확인
SELECT auth.uid();

-- 사용자별 계산 개수
SELECT 
  user_id,
  calculator_type,
  COUNT(*) as count
FROM calculations
GROUP BY user_id, calculator_type
ORDER BY count DESC;

-- 최근 계산 기록 조회
SELECT 
  calculator_type,
  title,
  created_at
FROM calculations
WHERE user_id = auth.uid()
ORDER BY created_at DESC
LIMIT 10;

-- 계산기 타입별 통계
SELECT 
  calculator_type,
  COUNT(*) as total,
  COUNT(DISTINCT user_id) as unique_users
FROM calculations
GROUP BY calculator_type;

