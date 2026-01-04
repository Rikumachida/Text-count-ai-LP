'use client';

import Image from 'next/image';

const usecases = [
  {
    emoji: '📝',
    title: 'エントリーシート',
    description: '就活のES作成に最適。PREP法で論理的な自己PRや志望動機を構成し、説得力のある文章を作成できます。',
    tags: ['就活', '自己PR', '志望動機'],
  },
  {
    emoji: '📧',
    title: 'ビジネスメール',
    description: '提案書やお礼メールなど、ビジネスシーンで必要な文章を効率的に作成。丁寧さとわかりやすさを両立します。',
    tags: ['提案', 'お礼', '報告'],
  },
  {
    emoji: '📖',
    title: '論文・レポート',
    description: '学術的な文章の構成をサポート。序論から結論まで、論理的な流れを設計して執筆できます。',
    tags: ['学術', '研究', 'レポート'],
  },
  {
    emoji: '💭',
    title: 'ブログ・感想文',
    description: '読者を惹きつける記事構成を設計。導入から結論まで、読みやすい文章を簡単に作成できます。',
    tags: ['ブログ', 'コンテンツ', '感想'],
  },
];

export function Usecases() {
  return (
    <section id="usecase" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600">
            ユースケース
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-[var(--text-dark)] md:text-5xl">
            あらゆるシーンで活躍
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-lg text-[var(--text-muted)]">
            就活からビジネス、学術まで。
            どんな文章作成シーンでもContäxがサポートします。
          </p>
        </div>

        {/* Usecases Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {usecases.map((usecase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-violet-200 hover:shadow-lg"
            >
              <div className="mb-4 text-5xl">{usecase.emoji}</div>
              <h3 className="mb-3 text-xl font-semibold text-[var(--text-dark)]">
                {usecase.title}
              </h3>
              <p className="mb-6 leading-relaxed text-[var(--text-muted)]">
                {usecase.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {usecase.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

