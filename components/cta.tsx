'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

export function CTA() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section className="relative overflow-hidden py-32 lg:py-40">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div
          className="absolute left-1/4 top-0 h-[600px] w-[800px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0) 70%)',
          }}
        />
        <div
          className="absolute right-1/4 bottom-0 h-[600px] w-[800px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(58, 156, 237, 0.15) 0%, rgba(58, 156, 237, 0) 70%)',
          }}
        />
      </div>

      <div 
        ref={ref} 
        className="relative mx-auto max-w-[800px] px-6 text-center"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <span className="font-google-sans mb-6 inline-block text-2xl lg:text-[30px] font-semibold text-[var(--primary)]" style={{ letterSpacing: '-0.01em' }}>
          Get Started
        </span>
        <h2 className="text-4xl font-semibold tracking-tight text-[var(--text-dark)] md:text-5xl" style={{ letterSpacing: '-0.01em' }}>
          今すぐ始めよう
        </h2>
        <p className="mx-auto mt-6 max-w-[600px] text-lg text-[#5E5677]" style={{ letterSpacing: '-0.01em' }}>
          AI時代に差がつく文章力を身につけましょう。
          <br />
          無料プランで今すぐスタートできます。
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://contax-next-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[56px] items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-8 text-lg font-semibold text-[var(--text-dark)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            無料で始める
            <Image
              src="/arrow-icon.svg"
              alt=""
              width={24}
              height={24}
              className="opacity-60"
            />
          </a>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              window.location.reload();
            }}
            className="flex h-[56px] items-center justify-center rounded-xl bg-[var(--primary)] px-8 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
          >
            もう一度説明を見る
          </button>
        </div>
      </div>
    </section>
  );
}
