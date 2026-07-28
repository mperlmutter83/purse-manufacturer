'use client';

import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gray-200">
      {items.map((faq, i) => (
        <div key={faq.question} className="py-5">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between text-left gap-4"
          >
            <h5 className={`font-sans font-semibold text-base md:text-lg ${openIndex === i ? 'text-teal' : 'text-navy'}`}>
              {faq.question}
            </h5>
            <span className="text-teal text-2xl font-sans shrink-0">
              {openIndex === i ? '−' : '+'}
            </span>
          </button>
          {openIndex === i && (
            <p className="mt-3 text-ink/80 leading-relaxed">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
