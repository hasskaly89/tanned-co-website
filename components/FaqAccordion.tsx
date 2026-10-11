"use client";

import { useId, useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

/** Accessible accordion: one item open at a time, announced to screen readers via aria-expanded. */
export default function FaqAccordion({
  items,
  renderAnswer,
}: {
  items: FaqItem[];
  renderAnswer?: (item: FaqItem) => React.ReactNode;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={item.q} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between gap-6 py-5 text-left text-[17px] font-medium text-ink hover:text-bronze-text transition-colors cursor-pointer"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className={`shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center text-bronze-text text-lg transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>
            {/* Always in the HTML (hidden when closed) so answers match the FAQPage JSON-LD. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 pr-14 text-body leading-relaxed"
            >
              {renderAnswer ? renderAnswer(item) : item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
