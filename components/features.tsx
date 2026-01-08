'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

const steps = [
  {
    title: '論理的な構成を設計する',
    description: 'ブロックを追加や組み換えをすることで、文章の構造を設計します。PREP法などのテンプレートを使えば、説得力のある文章構成を簡単に作れます。',
    image: '/screenshots/snapshot_editor.png',
  },
  {
    title: 'AIのヒントで内容を充実',
    description: 'テーマを入力すると、AIが各ブロックに最適なヒントを提案します。あなたの経験データも活用して、具体的で説得力のある内容を入力できます。',
    image: '/screenshots/snapshot_hint.png',
  },
  {
    title: 'ワンクリックで文章を完成',
    description: '設計した構成と入力内容をもとに、AIが高品質な文章を自動生成します。目標文字数も考慮して、バランスの取れた文章が瞬時に完成します。',
    image: '/screenshots/snapshot_text.png',
  },
];

function StepItem({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isInView } = useInView(0.15);
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center gap-6 lg:items-stretch ${
        isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }}
    >
      {/* Image */}
      <div className={`relative w-full px-4 lg:px-0 lg:w-[55%] flex-shrink-0`}>
        <div
          className="relative"
          style={{
            maskImage: isReversed
              ? 'linear-gradient(to right, black 65%, transparent 100%)'
              : 'linear-gradient(to left, black 65%, transparent 100%)',
            WebkitMaskImage: isReversed
              ? 'linear-gradient(to right, black 65%, transparent 100%)'
              : 'linear-gradient(to left, black 65%, transparent 100%)',
          }}
        >
          <div className="overflow-hidden rounded-2xl border-[7px] border-white shadow-[0_2px_24px_0_rgba(58,156,237,0.12)]">
            <Image
              src={step.image}
              alt={step.title}
              width={800}
              height={572}
              className="w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className={`flex flex-col justify-center gap-4 lg:gap-6 px-6 lg:w-[45%] ${
        isReversed 
          ? 'lg:pl-[12%] lg:pr-20' 
          : 'lg:pr-[12%] lg:pl-20'
      }`}>
        <h3 className="text-2xl lg:text-[36px] font-semibold text-[#464253] leading-tight" style={{ letterSpacing: '-0.01em' }}>
          {step.title}
        </h3>
        <p className="text-base lg:text-xl lg:leading-[1.7] text-[#5E5677]" style={{ letterSpacing: '-0.01em' }}>
          {step.description}
        </p>
      </div>
    </div>
  );
}

export function Features() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.15);

  return (
    <section id="product" className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-[-10%] top-[15%] h-[800px] w-[1000px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.2) 0%, rgba(124, 58, 237, 0) 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute left-[25%] top-[18%] h-[600px] w-[700px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0) 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute right-[-10%] top-[40%] h-[800px] w-[1000px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(58, 156, 237, 0.2) 0%, rgba(58, 156, 237, 0) 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute right-[25%] top-[43%] h-[600px] w-[700px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(58, 156, 237, 0.15) 0%, rgba(58, 156, 237, 0) 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute left-[-10%] top-[70%] h-[800px] w-[1000px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.2) 0%, rgba(124, 58, 237, 0) 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute left-[25%] top-[73%] h-[600px] w-[700px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0) 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Section Header */}
      <div 
        ref={headerRef}
        className="relative z-10 mx-auto max-w-[900px] px-6 mb-16 lg:mb-24 text-center"
        style={{
          opacity: headerInView ? 1 : 0,
          transform: headerInView ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <span className="font-google-sans mb-4 inline-block text-xl lg:text-2xl font-semibold text-[var(--primary)]" style={{ letterSpacing: '-0.01em' }}>
          Our Products
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-[#464253] md:text-4xl lg:text-[52px] lg:leading-[1.25]" style={{ letterSpacing: '-0.01em' }}>
          3ステップで完成する
          <br />
          文章作成の新習慣
        </h2>
        <p className="mx-auto mt-5 max-w-[600px] text-base lg:text-xl lg:leading-[1.5] text-[#5E5677]" style={{ letterSpacing: '-0.01em' }}>
          構成を設計し、内容を入力し、生成するだけ。
          <br />
          AI時代における論理的な文章が、簡単に書けるようになります。
        </p>
      </div>

      {/* Steps */}
      <div className="relative z-10 flex flex-col gap-16 lg:gap-24">
        {steps.map((step, index) => (
          <StepItem key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}
