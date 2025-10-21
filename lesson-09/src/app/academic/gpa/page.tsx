import type { Metadata } from 'next';
import GPACalculator from '@/components/calculators/GPACalculator';

export const metadata: Metadata = {
  title: '학점 계산기 - GPA 평점 계산',
  description: '과목별 학점과 성적을 입력하면 평균 학점(GPA)을 자동으로 계산해드립니다. 대학생 필수 도구!',
  keywords: ['학점계산기', 'GPA', '평점계산', '대학교', '성적', 'GPA계산'],
  openGraph: {
    title: '학점 계산기 - GPA',
    description: '대학생 필수! 평균 학점을 빠르게 계산하세요',
    url: '/academic/gpa',
  },
  alternates: {
    canonical: '/academic/gpa',
  },
};

export default function GPAPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '학점 계산기 (GPA)',
    applicationCategory: 'UtilityApplication',
    description: '대학교 평균 학점(GPA) 계산기',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          📚 학점 계산기 (GPA)
        </h1>
        <p className="text-center text-gray-600 mb-8">
          과목별 성적을 입력하면 평균 학점을 자동으로 계산합니다
        </p>
        <GPACalculator />
      </div>
    </>
  );
}

