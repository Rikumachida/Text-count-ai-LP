'use client';

import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'プロダクト',
    links: [
      { label: '機能', href: '#product' },
      { label: 'ユースケース', href: '#usecase' },
      { label: '料金', href: '#plan' },
    ],
  },
  {
    title: 'サポート',
    links: [
      { label: 'ヘルプセンター', href: '/help' },
      { label: 'お問い合わせ', href: '/contact' },
      { label: 'フィードバック', href: '/feedback' },
    ],
  },
  {
    title: '会社情報',
    links: [
      { label: '運営会社', href: '/company' },
      { label: 'プライバシーポリシー', href: '/privacy' },
      { label: '利用規約', href: '/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Contäx"
                width={140}
                height={32}
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              AI時代に差がつく文章作成ツール。
              論理的な構成設計とAI支援で、
              説得力のある文章を効率的に作成。
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="mb-4 font-semibold text-[var(--text-dark)]">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-[var(--text-muted)]">
            © 2026 Contäx. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="https://twitter.com"
              className="text-[var(--text-muted)] transition-colors hover:text-[var(--primary)]"
              target="_blank"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com"
              className="text-[var(--text-muted)] transition-colors hover:text-[var(--primary)]"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

