"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Photo = {
  src: string;
  alt: string;
  category: string;
};

const photos: Photo[] = [
  { src: `${basePath}/photos/team-group-holiday.jpg`, alt: "Phase2 team at holiday gathering", category: "Culture" },
  { src: `${basePath}/photos/earth-space.jpg`, alt: "Earth from space with city lights", category: "Abstract" },
  { src: `${basePath}/photos/devs-laptops.jpg`, alt: "Developers working side by side", category: "Collaboration" },
  { src: `${basePath}/photos/whiteboard-presenting.jpg`, alt: "Team member presenting at whiteboard", category: "Leadership" },
  { src: `${basePath}/photos/golden-hour-coworkers.jpg`, alt: "Coworkers in golden hour light", category: "Culture" },
  { src: `${basePath}/photos/speaker-microphone.jpg`, alt: "Speaker addressing the team", category: "Leadership" },
  { src: `${basePath}/photos/pair-discussing.jpg`, alt: "Pair discussing at laptop", category: "Collaboration" },
  { src: `${basePath}/photos/face-closeup.jpg`, alt: "Close-up portrait in warm light", category: "Abstract" },
  { src: `${basePath}/photos/portrait-smiling.jpg`, alt: "Team member smiling at conference", category: "Culture" },
  { src: `${basePath}/photos/colleagues-meeting.jpg`, alt: "Colleagues in a meeting room", category: "Collaboration" },
  { src: `${basePath}/photos/team-working.jpg`, alt: "Team members working together", category: "Collaboration" },
  { src: `${basePath}/photos/laughing-at-laptop.jpg`, alt: "Person laughing while working", category: "Culture" },
  { src: `${basePath}/photos/dev-at-table.jpg`, alt: "Developer at dinner event", category: "Culture" },
  { src: `${basePath}/photos/focused-coding.jpg`, alt: "Focused developer behind laptop", category: "Focus" },
];

export function PhotoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const animFrame = useRef<number>(0);

  // Momentum physics
  const applyMomentum = useCallback(() => {
    const track = trackRef.current;
    if (!track || Math.abs(velocity) < 0.5) {
      setVelocity(0);
      return;
    }
    track.scrollLeft += velocity;
    setVelocity((v) => v * 0.95);
    animFrame.current = requestAnimationFrame(applyMomentum);
  }, [velocity]);

  useEffect(() => {
    if (!isDragging && Math.abs(velocity) > 0.5) {
      animFrame.current = requestAnimationFrame(applyMomentum);
    }
    return () => cancelAnimationFrame(animFrame.current);
  }, [isDragging, velocity, applyMomentum]);

  // Track active slide for indicator
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleScroll = () => {
      const cardWidth = track.scrollWidth / photos.length;
      const idx = Math.round(track.scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(idx, photos.length - 1)));
    };
    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(trackRef.current?.scrollLeft ?? 0);
    lastX.current = e.clientX;
    lastTime.current = Date.now();
    cancelAnimationFrame(animFrame.current);
    setVelocity(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return;
    const dx = e.clientX - startX;
    trackRef.current.scrollLeft = scrollLeft - dx;

    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      setVelocity((lastX.current - e.clientX) / dt * 16);
    }
    lastX.current = e.clientX;
    lastTime.current = now;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const scrollTo = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.offsetWidth * 0.38;
    const amount = direction === "left" ? -cardWidth : cardWidth;
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  const downloadPhoto = (src: string, alt: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = `Phase2_${alt.replace(/[^a-zA-Z0-9]/g, "_")}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      {/* Navigation arrows */}
      <button
        onClick={() => scrollTo("left")}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 border border-border shadow-lg backdrop-blur-sm text-foreground transition-all hover:bg-card hover:scale-110"
        aria-label="Scroll left"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={() => scrollTo("right")}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 border border-border shadow-lg backdrop-blur-sm text-foreground transition-all hover:bg-card hover:scale-110"
        aria-label="Scroll right"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className={`flex gap-4 overflow-x-auto scrollbar-hide pb-4 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollSnapType: isDragging ? "none" : "x proximity",
        }}
      >
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className="group relative shrink-0 overflow-hidden rounded-xl border border-border"
            style={{
              width: "clamp(280px, 38vw, 480px)",
              scrollSnapAlign: "center",
            }}
          >
            {/* Image */}
            <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                draggable={false}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-abyss/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Download button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  downloadPhoto(photo.src, photo.alt);
                }}
                className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 backdrop-blur-md text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-white/30 hover:scale-110"
                title="Download image"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>

              {/* Category badge */}
              <span className="absolute top-3 left-3 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {photo.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="mt-4 flex items-center justify-center gap-1">
        {photos.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-6 bg-cyan"
                : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
