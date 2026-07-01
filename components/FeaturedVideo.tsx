"use client";

import { site } from "@/data/site";
import { Play, ExternalLink } from "lucide-react";

const DOUYIN_URL = "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7654979713093487935";

export default function FeaturedVideo() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="glow-orb glow-orb--mid" />
      <div className="section-container relative z-10">
        <div className="mb-8 flex items-center gap-3">
          <span className="w-1 h-6 rounded-full bg-accent" />
          <h2 className="text-section">Featured Video</h2>
        </div>

        <a
          href={DOUYIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-4 sm:p-6 max-w-3xl block group cursor-pointer"
        >
          <div className="video-wrapper">
            <div className="absolute inset-0 flex items-center justify-center bg-[#e8ecf4] rounded-xl
                            group-hover:bg-[#dde3f0] transition-colors">
              <div className="w-16 h-16 rounded-full bg-accent/90 backdrop-blur flex items-center justify-center
                              group-hover:bg-accent group-hover:scale-110 transition-all shadow-lg">
                <Play className="w-6 h-6 fill-white text-white ml-0.5" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 px-1">
            <p className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
              {site.featuredVideo.title}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-text-tertiary">
              <ExternalLink className="w-3 h-3" />
              <span>抖音</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
