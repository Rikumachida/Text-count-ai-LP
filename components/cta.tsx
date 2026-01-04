'use client';

import Image from 'next/image';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
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

      <div className="relative mx-auto max-w-[800px] px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-[var(--text-dark)] md:text-5xl">
          今すぐ始めよう
        </h2>
        <p className="mx-auto mt-6 max-w-[600px] text-lg text-[var(--text-muted)]">
          AI時代に差がつく文章力を身につけましょう。
          <br />
          無料プランで今すぐスタートできます。
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="flex h-[56px] items-center justify-center gap-3 rounded-xl bg-[var(--primary)] px-8 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
          >
            無料で始める
            <Image
              src="/arrow-icon.svg"
              alt=""
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="#product"
            className="flex h-[56px] items-center justify-center rounded-xl border border-gray-300 px-8 text-lg font-semibold text-[var(--text-dark)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            機能を見る
          </Link>
        </div>
      </div>
    </section>
  );
}


