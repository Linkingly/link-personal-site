"use client";

import { useState, useRef, useCallback } from "react";
import { site } from "@/data/site";
import {
  GitFork,
  Video,
  AtSign,
  Play,
  ExternalLink,
  Camera,
} from "lucide-react";

const PHOTO_STORAGE_KEY = "hero-photo";

const socialIcons: Record<string, React.ReactNode> = {
  github: <GitFork className="w-4 h-4" />,
  youtube: <Video className="w-4 h-4" />,
  twitter: <AtSign className="w-4 h-4" />,
  bilibili: <Play className="w-4 h-4" />,
  douyin: <Play className="w-4 h-4" />,
};

export default function Hero() {
  const [photo, setPhoto] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(PHOTO_STORAGE_KEY);
    }
    return null;
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        localStorage.setItem(PHOTO_STORAGE_KEY, base64);
        setPhoto(base64);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Glow orbs */}
      <div className="glow-orb glow-orb--top" />

      <div className="section-container relative z-10 w-full py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <span className="label-pill self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {site.tagline}
            </span>

            <h1 className="hero-title max-w-xl">
              Hi, I&apos;m{" "}
              <span className="accent">{site.name}</span>.
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary max-w-lg leading-relaxed">
              {site.subtitle}
            </p>

            <p className="text-base text-text-tertiary max-w-md leading-relaxed">
              {site.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.douyin.com/user/self?from_tab_name=main&modal_id=7656458189096963363"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Play className="w-4 h-4 fill-white" />
                Watch Video
              </a>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GitFork className="w-4 h-4" />
                View GitHub
              </a>
            </div>

            {/* Social links row */}
            <div className="flex items-center gap-3 text-text-tertiary">
              {Object.entries(site.social).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-primary transition-colors"
                  title={key}
                >
                  {socialIcons[key] || <ExternalLink className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right — brand card */}
          <div className="flex justify-center lg:justify-end">
            <div className="glass-card p-8 sm:p-10 w-full max-w-sm flex flex-col items-center gap-6 text-center relative overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(94,158,255,0.08),transparent_60%)]" />

              {/* Photo placeholder */}
              <div
                className="relative z-10 w-28 h-28 rounded-full bg-surface border border-border flex items-center justify-center overflow-hidden cursor-pointer group transition-all duration-300 hover:border-accent/40 hover:shadow-lg"
                onClick={handlePhotoClick}
                title="点击上传照片"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {photo ? (
                  <img
                    src={photo}
                    alt={site.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-3xl font-semibold text-text-tertiary select-none">
                    {site.name[0]}
                  </span>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="relative z-10 flex flex-col gap-1">
                <h2 className="text-xl font-semibold text-text-primary">
                  {site.name}
                </h2>
                <p className="text-sm text-text-tertiary">{site.subtitle}</p>
              </div>

              <div className="relative z-10 flex flex-wrap justify-center gap-2">
                {site.bento.slice(0, 3).map((item) => (
                  <span
                    key={item.tag}
                    className="px-3 py-1 text-xs rounded-full bg-accent-dim border border-[rgba(94,158,255,0.14)] text-accent"
                  >
                    {item.tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
