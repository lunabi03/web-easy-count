'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const links = [
    { href: '/', label: '홈' },
    { href: '/date/dday', label: '디데이' },
    { href: '/date/birthday', label: '생일' },
    { href: '/electricity', label: '전기요금' },
    { href: '/salary', label: '연봉' },
    { href: '/shopping', label: '쇼핑' },
  ];
  
  return (
    <nav className="flex gap-4">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-md transition-colors
              ${isActive 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}


