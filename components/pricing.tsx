'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    price: '¥0',
    period: '永久無料',
    description: 'まずは試してみたい方に',
    features: [
      'ドキュメント3件まで',
      'AIヒント生成 10回/月',
      'AI文章生成 5回/月',
      'PREP法テンプレート',
    ],
    cta: '無料で始める',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '¥980',
    period: '/月',
    description: '本格的に使いたい方に',
    features: [
      'ドキュメント無制限',
      'AIヒント生成 無制限',
      'AI文章生成 100回/月',
      'すべてのテンプレート',
      '経験データ管理',
      '優先サポート',
    ],
    cta: 'Proを始める',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '¥2,980',
    period: '/月',
    description: 'チームで使いたい方に',
    features: [
      'Pro のすべての機能',
      'チームメンバー5名まで',
      'AI文章生成 無制限',
      'テンプレート共有',
      'チーム管理機能',
      '専用サポート',
    ],
    cta: 'お問い合わせ',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="plan" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-600">
            料金プラン
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-[var(--text-dark)] md:text-5xl">
            シンプルな料金体系
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-lg text-[var(--text-muted)]">
            無料プランからスタート。必要に応じてアップグレードできます。
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'border-2 border-[var(--primary)] bg-white shadow-xl'
                  : 'border border-gray-200 bg-white'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[var(--primary)] px-4 py-1 text-sm font-semibold text-white">
                  人気
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[var(--text-dark)]">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {plan.description}
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--text-dark)]">
                  {plan.price}
                </span>
                <span className="text-[var(--text-muted)]">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-[var(--text-muted)]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={`block w-full rounded-xl py-3 text-center font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-[var(--primary)] text-white hover:opacity-90'
                    : 'border border-gray-300 text-[var(--text-dark)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

