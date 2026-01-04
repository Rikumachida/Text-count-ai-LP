'use client';

import { Sparkles, Layers, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: '構造化された文章設計',
    description: 'PREP法をベースに、論理的な文章構造を簡単に設計。ブロックを組み合わせて、説得力のある文章を作成できます。',
    color: 'bg-violet-100 text-violet-600',
  },
  {
    icon: Sparkles,
    title: 'AIによるヒント生成',
    description: 'テーマを入力するだけで、AIが各ブロックに最適な内容のヒントを提案。執筆のアイデアに困ることがありません。',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Target,
    title: '目標文字数の管理',
    description: '全体の目標文字数を設定すると、各ブロックに最適な文字数を自動配分。バランスの取れた文章が書けます。',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Zap,
    title: 'ワンクリックで文章生成',
    description: '設計した構成をもとに、AIが高品質な文章を自動生成。あなたの意図を反映した文章が瞬時に完成します。',
    color: 'bg-amber-100 text-amber-600',
  },
];

export function Features() {
  return (
    <section id="product" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-[var(--primary)]">
            機能紹介
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-[var(--text-dark)] md:text-5xl">
            AI時代の文章作成を、
            <br />
            もっとシンプルに。
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-lg text-[var(--text-muted)]">
            Contäxは、論理的な文章構造の設計からAIによる執筆支援まで、
            文章作成の全プロセスをサポートします。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-violet-200 hover:shadow-lg"
              >
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.color}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[var(--text-dark)]">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-[var(--text-muted)]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

