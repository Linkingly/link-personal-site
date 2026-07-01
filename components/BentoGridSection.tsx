"use client";

import { site } from "@/data/site";
import { Zap, Layers, Box, Code2, ExternalLink, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Layers,
  Box,
  Code2,
};

export default function BentoGridSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="glow-orb glow-orb--bottom" />
      <div className="section-container relative z-10">
        <div className="mb-10 flex items-center gap-3">
          <span className="w-1 h-6 rounded-full bg-accent" />
          <h2 className="text-section">High-Quality Video Content</h2>
        </div>

        <div className="bento-grid">
          {site.bento.map((card, i) => {
            const Icon = iconMap[card.icon] || Box;
            return (
              <a
                key={i}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover bento-card group cursor-pointer no-underline"
              >
                <div className="bento-card__icon">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="bento-card__title">{card.title}</h3>
                <p className="bento-card__desc">{card.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="bento-card__tag">{card.tag}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
