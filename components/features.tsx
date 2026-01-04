'use client';

import Image from 'next/image';

const features = [
  {
    icon: '/icons/icon-cards.png',
    iconBg: '#FFF9E9',
    title: '構造化された文章設計',
    description: 'PREP法をベースに、論理的な文章構造を簡単に設計。ブロックを組み合わせて、説得力のある文章を作成できます。',
  },
  {
    icon: '/icons/icon-lightbulb.png',
    iconBg: '#F4E9FF',
    title: 'AIによるヒント生成',
    description: 'テーマを入力するだけで、AIが各ブロックに最適な内容のヒントを提案。執筆のアイデアに困ることがありません。',
  },
  {
    icon: '/icons/icon-chart.png',
    iconBg: '#D6EFFF',
    title: '目標文字数の管理',
    description: '全体の目標文字数を設定すると、各ブロックに最適な文字数を自動配分。バランスの取れた文章が書けます。',
  },
  {
    icon: '/icons/icon-pencil.png',
    iconBg: '#FFEDE9',
    title: 'ワンクリックで文章生成',
    description: '設計した構成をもとに、AIが高品質な文章を自動生成。あなたの意図を反映した文章が瞬時に完成します。',
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
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-[#D9D9D9] bg-white p-6 transition-all hover:border-violet-200 hover:shadow-lg"
            >
              <div className="flex flex-col gap-6">
                {/* Icon */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-lg"
                  style={{ backgroundColor: feature.iconBg }}
                >
                  <Image
                    src={feature.icon}
                    alt=""
                    width={36}
                    height={36}
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-[#332A3C]">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#332A3C]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
