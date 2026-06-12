"use client";

import { useState } from "react";

type AssetImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  fallbackLabel: string;
  children?: React.ReactNode;
};

export function AssetImage({ src, alt, className = "", fallbackClassName = "", fallbackLabel, children }: AssetImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded || failed ? (
        <div className={`absolute inset-0 flex items-center justify-center ${fallbackClassName}`}>
          <div className="max-w-[78%] text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-glow" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/70">{fallbackLabel}</p>
          </div>
        </div>
      ) : null}
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover transition duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      ) : null}
      {children}
    </div>
  );
}
