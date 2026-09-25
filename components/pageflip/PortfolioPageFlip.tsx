"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Icon from "@/components/icons/Icon";
import { ICONS } from "@/constants/icons";

interface PortfolioPageFlipProps {
  children: React.ReactNode[];
  initialPage?: number;
}

// Subtle synthesized paper rustle sound using Web Audio API (no external MP3 needed)
function playPaperSound() {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const bufferSize = ctx.sampleRate * 0.15; // 150ms burst
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 800;
    filter.Q.value = 1.2;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
    noise.stop(ctx.currentTime + 0.15);
  } catch {
    // AudioContext might be blocked until user gesture, safely ignore
  }
}

export default function PortfolioPageFlip({
  children,
  initialPage = 0,
}: PortfolioPageFlipProps) {
  const totalPages = children.length;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev" | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToPage = useCallback(
    (targetPage: number) => {
      if (isFlipping || targetPage === currentPage) return;
      if (targetPage < 0 || targetPage >= totalPages) return;

      const direction = targetPage > currentPage ? "next" : "prev";
      setFlipDirection(direction);
      setIsFlipping(true);

      if (soundEnabled) {
        playPaperSound();
      }

      // Complete the page flip animation after 600ms
      setTimeout(() => {
        setCurrentPage(targetPage);
        setIsFlipping(false);
        setFlipDirection(null);
      }, 600);
    },
    [currentPage, isFlipping, soundEnabled, totalPages]
  );

  const flipNext = useCallback(() => {
    if (currentPage < totalPages - 1) {
      goToPage(currentPage + 1);
    }
  }, [currentPage, goToPage, totalPages]);

  const flipPrev = useCallback(() => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  }, [currentPage, goToPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        flipNext();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        flipPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [flipNext, flipPrev]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      flipNext();
    } else if (diff < -50) {
      flipPrev();
    }
    setTouchStartX(null);
  };

  // Determine which page content is displayed on the active and incoming leaves
  const incomingPageIndex =
    flipDirection === "next"
      ? currentPage + 1
      : flipDirection === "prev"
      ? currentPage - 1
      : currentPage;

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Controls Bar */}
      <div className="w-full max-w-4xl flex items-center justify-between bg-ink-primary text-paper-card px-4 py-2 text-xs font-sans mb-3 border border-ink-rule shadow-sm">
        <div className="flex items-center space-x-2">
          <span className="font-bold uppercase tracking-widest text-paper-bg">
            3D PAGE-TURN VIEW
          </span>
          <span className="hidden sm:inline text-neutral-400">|</span>
          <span className="hidden sm:inline text-neutral-300">
            Use arrow keys or click edges to turn
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`px-2 py-1 text-[11px] font-bold uppercase transition-colors flex items-center space-x-1 ${
              soundEnabled
                ? "bg-ink-dark text-paper-bg hover:bg-neutral-800"
                : "bg-neutral-700 text-neutral-400 hover:text-white"
            }`}
            title={soundEnabled ? "Paper Sound: On" : "Paper Sound: Off"}
            aria-label="Toggle paper sound"
          >
            <Icon
              icon={soundEnabled ? ICONS.sound : ICONS.soundOff}
              className="w-3.5 h-3.5"
            />
            <span className="hidden md:inline">
              {soundEnabled ? "SOUND ON" : "MUTED"}
            </span>
          </button>

          {/* Prev Button */}
          <button
            onClick={flipPrev}
            disabled={currentPage === 0 || isFlipping}
            className="px-2.5 py-1 bg-ink-dark hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed text-paper-bg flex items-center space-x-1 font-bold transition-colors"
            aria-label="Previous Page"
          >
            <Icon icon={ICONS.arrowLeft} className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">PREV</span>
          </button>

          {/* Page Counter */}
          <span className="font-mono text-xs px-2 text-neutral-200 font-bold">
            {currentPage + 1} / {totalPages}
          </span>

          {/* Next Button */}
          <button
            onClick={flipNext}
            disabled={currentPage >= totalPages - 1 || isFlipping}
            className="px-2.5 py-1 bg-ink-dark hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed text-paper-bg flex items-center space-x-1 font-bold transition-colors"
            aria-label="Next Page"
          >
            <span className="hidden sm:inline">NEXT</span>
            <Icon icon={ICONS.arrowRight} className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3D Book Stage with Perspective */}
      <div
        className="w-full max-w-4xl relative py-2 flex justify-center"
        style={{ perspective: "2200px" }}
      >
        {/* Book Container with Paper Spine & Drop Shadows */}
        <div className="relative w-full max-w-2xl bg-paper-white border border-ink-rule shadow-2xl overflow-hidden min-h-[620px] sm:min-h-[720px] flex flex-col justify-between">
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[4px_4px] z-10" />

          {/* Spine Lighting & Crease Gradient */}
          <div className="absolute inset-y-0 left-0 w-8 pointer-events-none bg-gradient-to-r from-black/15 via-black/5 to-transparent z-20" />
          <div className="absolute inset-y-0 right-0 w-8 pointer-events-none bg-gradient-to-l from-black/10 to-transparent z-20" />

          {/* Base Page (Incoming underneath during flip, or static current) */}
          <div className="relative z-0 p-4 sm:p-6 flex-1 flex flex-col justify-between">
            <div className="flex-1">
              {isFlipping
                ? children[incomingPageIndex]
                : children[currentPage]}
            </div>

            <div className="text-center text-[10px] font-serif border-t border-ink-rule/30 pt-1 mt-4 uppercase text-ink-muted flex items-center justify-between">
              <span>The Sahil Gazette</span>
              <span className="font-bold">
                Page {isFlipping ? incomingPageIndex + 1 : currentPage + 1} of {totalPages}
              </span>
              <span>Portfolio Edition</span>
            </div>
          </div>

          {/* 3D Animated Flipping Leaf */}
          {isFlipping && (
            <div
              className={`absolute inset-0 bg-paper-white border border-ink-rule p-4 sm:p-6 z-30 flex flex-col justify-between overflow-hidden shadow-2xl pointer-events-none ${
                flipDirection === "next" ? "animate-flip-next" : "animate-flip-prev"
              }`}
              style={{
                transformOrigin:
                  flipDirection === "next" ? "left center" : "right center",
                backfaceVisibility: "hidden",
              }}
            >
              {/* Dynamic Turn Shadow Overlay */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity ${
                  flipDirection === "next"
                    ? "bg-gradient-to-r from-black/40 via-black/10 to-transparent"
                    : "bg-gradient-to-l from-black/40 via-black/10 to-transparent"
                }`}
              />

              <div className="flex-1">
                {children[currentPage]}
              </div>

              <div className="text-center text-[10px] font-serif border-t border-ink-rule/30 pt-1 mt-4 uppercase text-ink-muted flex items-center justify-between">
                <span>The Sahil Gazette</span>
                <span className="font-bold">
                  Page {currentPage + 1} of {totalPages}
                </span>
                <span>Portfolio Edition</span>
              </div>
            </div>
          )}

          {/* Clickable Edge Zones for Natural Flipping */}
          {!isFlipping && (
            <>
              {currentPage > 0 && (
                <button
                  onClick={flipPrev}
                  className="group absolute inset-y-0 left-0 w-16 sm:w-24 z-20 cursor-pointer flex items-center justify-start pl-2 opacity-0 hover:opacity-100 transition-opacity"
                  aria-label="Turn to previous page"
                  title="Click to turn back"
                >
                  <div className="p-2 bg-ink-primary/90 text-paper-bg rounded-full shadow-lg transform -translate-x-1 group-hover:translate-x-0 transition-transform">
                    <Icon icon={ICONS.arrowLeft} className="w-4 h-4" />
                  </div>
                </button>
              )}

              {currentPage < totalPages - 1 && (
                <button
                  onClick={flipNext}
                  className="group absolute inset-y-0 right-0 w-16 sm:w-24 z-20 cursor-pointer flex items-center justify-end pr-2 opacity-0 hover:opacity-100 transition-opacity"
                  aria-label="Turn to next page"
                  title="Click to turn forward"
                >
                  <div className="p-2 bg-ink-primary/90 text-paper-bg rounded-full shadow-lg transform translate-x-1 group-hover:translate-x-0 transition-transform">
                    <Icon icon={ICONS.arrowRight} className="w-4 h-4" />
                  </div>
                </button>
              )}
            </>
          )}

          {/* Bottom Right Paper Corner Curl Visual Indicator */}
          {currentPage < totalPages - 1 && !isFlipping && (
            <div
              onClick={flipNext}
              className="absolute bottom-0 right-0 w-8 h-8 z-20 cursor-pointer group"
              title="Click corner to turn page"
            >
              <div className="absolute bottom-0 right-0 w-0 h-0 border-solid border-b-16 border-r-16 border-t-0 border-l-0 border-b-ink-primary/30 border-r-ink-primary/40 group-hover:border-b-ink-primary group-hover:border-r-ink-primary transition-all duration-200" />
            </div>
          )}
        </div>
      </div>

      {/* Quick Jump Ribbon */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 text-xs font-sans">
        <span className="font-bold text-ink-primary mr-1 uppercase text-[11px]">
          JUMP TO PAGE:
        </span>
        {[
          "1. About Me",
          "2. Experience",
          "3. Projects",
          "4. Skills",
          "5. Career",
          "6. Contact",
        ].map((title, i) => (
          <button
            key={i}
            onClick={() => goToPage(i)}
            disabled={isFlipping}
            className={`px-2.5 py-1 border text-[11px] font-bold uppercase transition-all cursor-pointer ${
              currentPage === i
                ? "bg-ink-primary text-paper-bg border-ink-rule shadow-xs scale-105"
                : "bg-paper-white text-ink-primary border-ink-rule/30 hover:bg-ink-primary/10"
            }`}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
}
