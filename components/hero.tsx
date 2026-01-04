'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 少し遅延させてからアニメーション開始
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-[72px]">
      {/* Background Gradients - 弱めに調整、下に移動 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue gradient blob */}
        <div
          className="absolute right-[10%] top-[50%] h-[854px] w-[1356px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(58, 156, 237, 0.4) 0%, rgba(58, 156, 237, 0) 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Purple gradient blob */}
        <div
          className="absolute left-0 top-[45%] h-[1362px] w-[1593px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.35) 0%, rgba(124, 58, 237, 0) 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1080px] px-6 pt-32">
        <div className="flex flex-col items-center text-center">
          {/* Heading - アニメーション付き */}
          <h1
            className={`text-5xl font-semibold leading-[1.33] tracking-tight transition-all duration-700 ease-out md:text-6xl lg:text-[77px] ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ color: 'var(--text-dark)', letterSpacing: '-0.01em' }}
          >
            AI時代に差がつく
            <br />
            　文章作成を体験しよう。
          </h1>

          {/* Subheading - アニメーション付き（遅延） */}
          <p
            className={`mt-8 max-w-[800px] text-xl leading-[1.44] transition-all duration-700 ease-out delay-150 md:text-2xl lg:text-[30px] ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ color: 'var(--text-muted)', letterSpacing: '-0.01em' }}
          >
            AIに執筆を任せる時代、差がつくのは論理の構成力。
            <br />
            自ら型を設計する習慣が、AIを操るプロンプト力と執筆する力を養います。
          </p>

          {/* CTA Button - アニメーション付き（さらに遅延） */}
          <Link
            href="/signup"
            className={`mt-16 flex h-[69px] items-center justify-center gap-3 rounded-xl bg-[var(--primary)] px-12 text-2xl font-semibold text-white transition-all duration-700 ease-out delay-300 hover:scale-105 hover:shadow-lg ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ letterSpacing: '-0.01em' }}
          >
            無料で試す
            <Image
              src="/arrow-icon.svg"
              alt=""
              width={32}
              height={32}
            />
          </Link>
        </div>

        {/* Screenshot - アニメーション付き（最も遅延） */}
        <div 
          className={`mt-20 flex justify-center transition-all duration-1000 ease-out delay-500 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}
        >
          <div
            className="relative overflow-hidden rounded-2xl border-[9px] border-white shadow-2xl"
            style={{ maxWidth: '1134px' }}
          >
            <Image
              src="/screenshot.jpg"
              alt="Contäxのアプリ画面"
              width={1134}
              height={761}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
