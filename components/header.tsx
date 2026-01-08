'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '#product', label: 'プロダクト' },
  { href: '#usecase', label: 'ユースケース' },
  { href: '#plan', label: 'プラン' },
];

export function Header() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      
      // ヒーローセクション表示中は何も選択しない
      if (window.scrollY < 500) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期状態をチェック
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.offsetTop - 80; // ヘッダーの高さ分オフセット
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-[56px] md:h-[64px] lg:h-[72px] xl:h-[80px] 2xl:h-[88px] max-w-[1728px] items-center justify-between px-6 md:px-10 lg:px-14">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Contäx"
            width={180}
            height={41}
            className="md:w-[220px] lg:w-[260px] xl:w-[280px] h-auto"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-lg font-normal transition-all duration-300 ${
                  isActive 
                    ? 'text-[var(--primary)]' 
                    : 'text-[var(--text-muted)] hover:text-[var(--primary)]'
                }`}
                style={{ letterSpacing: '-0.01em' }}
              >
                {item.label}
                {/* アクティブインジケーター */}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--primary)] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/signin"
            className="flex h-[46px] items-center justify-center rounded-lg border border-[var(--text-muted)] px-8 text-lg font-normal text-[var(--text-muted)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            style={{ letterSpacing: '-0.01em' }}
          >
            サインイン
          </Link>
          <Link
            href="/signup"
            className="flex h-[46px] items-center justify-center rounded-lg bg-[var(--primary)] px-8 text-lg font-normal text-white transition-opacity hover:opacity-90"
            style={{ letterSpacing: '-0.01em' }}
          >
            サインアップ
          </Link>
        </div>
      </div>
    </header>
  );
}
