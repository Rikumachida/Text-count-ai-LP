'use client';

import Image from 'next/image';

const usecases = [
  {
    icon: '/usecases/icon-envelope.png',
    iconBg: '#F4E9FF',
    title: 'ビジネスメール',
    description: 'テーマを入力するだけで、AIが各ブロックに最適な内容のヒントを提案。執筆のアイデアに困ることがありません。',
    tags: [
      { icon: '/usecases/emoji-tipping-hand.png', label: '提案' },
      { icon: '/usecases/emoji-grinning.png', label: 'お礼' },
      { icon: '/usecases/emoji-notepad.png', label: '報告' },
    ],
  },
  {
    icon: '/usecases/icon-book.png',
    iconBg: '#D6EFFF',
    title: '論文・レポート',
    description: 'テーマを入力するだけで、AIが各ブロックに最適な内容のヒントを提案。執筆のアイデアに困ることがありません。',
    tags: [
      { icon: '/usecases/emoji-chart.png', label: '研究' },
      { icon: '/usecases/emoji-memo.png', label: 'レポート' },
      { icon: '/usecases/emoji-notepad.png', label: '学術' },
    ],
  },
  {
    icon: '/usecases/icon-memo-yellow.png',
    iconBg: '#FFF9E9',
    title: 'ブログ・感想文',
    description: 'テーマを入力するだけで、AIが各ブロックに最適な内容のヒントを提案。執筆のアイデアに困ることがありません。',
    tags: [
      { icon: '/usecases/emoji-memo.png', label: 'ブログ' },
      { icon: '/usecases/emoji-memo-yellow.png', label: '感想' },
      { icon: '/usecases/emoji-beaming.png', label: 'コンテンツ' },
    ],
  },
  {
    icon: '/usecases/icon-memo-red.png',
    iconBg: '#FFEDE9',
    title: 'エントリーシート',
    description: 'テーマを入力するだけで、AIが各ブロックに最適な内容のヒントを提案。執筆のアイデアに困ることがありません。',
    tags: [
      { icon: '/usecases/emoji-raising-hand.png', label: '志望動機' },
      { icon: '/usecases/emoji-tipping-hand.png', label: '自己PR' },
      { icon: '/usecases/emoji-office-worker.png', label: '就活' },
    ],
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
              className="group overflow-hidden rounded-2xl border border-[#D9D9D9] bg-white p-6 transition-all hover:border-violet-300 hover:shadow-lg"
            >
              <div className="flex flex-col gap-6">
                {/* Icon */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-lg"
                  style={{ backgroundColor: usecase.iconBg }}
                >
                  <Image
                    src={usecase.icon}
                    alt=""
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold text-[#332A3C]">
                      {usecase.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#332A3C]">
                      {usecase.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {usecase.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center gap-1 rounded-full bg-[#F5F3F8] px-2 py-1"
                      >
                        <Image
                          src={tag.icon}
                          alt=""
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                        <span className="text-[10px] font-semibold tracking-wide text-[#5E5677]">
                          {tag.label}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
