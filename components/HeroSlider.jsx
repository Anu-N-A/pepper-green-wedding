"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/images/hero-1.jpg",
    alt: "A newly married couple laughing together beneath floral garlands",
    title: "Capturing Love",
    subtitle: "Stories from Pepper Green",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "A groom placing a ring on his bride's finger under a white floral arch",
    title: "The First Look",
    subtitle: "Weddings by Pepper Green",
  },
  {
    src: "/images/hero-3.jpg",
    alt: "A couple framed by a carved stone arch overlooking a lake",
    title: "Two Souls, One Story",
    subtitle: "Celebrations across India",
  },
];

const INTERVAL = 5000;

function LongArrow({ direction = "right" }) {
  return (
    <svg
      width="138"
      height="12"
      viewBox="0 0 138 12"
      fill="none"
      aria-hidden="true"
      style={direction === "left" ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M0 6h135" stroke="currentColor" strokeWidth="1" />
      <path d="M129 1l6 5-6 5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () =>
      document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, INTERVAL);
    return () => window.clearInterval(timer);
  }, [paused, index]);

  const go = (direction) => {
    setIndex(
      (current) => (current + direction + SLIDES.length) % SLIDES.length
    );
  };

  const slide = SLIDES[index];

  return (
    <section
      id="home"
      className="hero"
      aria-roledescription="carousel"
      aria-label="Pepper Green featured weddings"
    >
      <div className="hero__slides">
        {SLIDES.map((item, i) => (
          <div
            key={item.src}
            className={`hero__slide ${i === index ? "is-active" : ""}`}
            aria-hidden={i !== index}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority
              sizes="100vw"
              quality={88}
            />
          </div>
        ))}
      </div>

      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__content">
        <div
          key={index}
          className="hero__content-inner"
        >
          <h1 className="hero__title">{slide.title}</h1>
          <p className="hero__subtitle">{slide.subtitle}</p>
        </div>
      </div>

      <div className="hero__controls">
        <button
          type="button"
          className="hero__arrow"
          onClick={() => go(-1)}
          aria-label="Previous slide"
        >
          <LongArrow direction="left" />
        </button>

        <div className="hero__meta">
          <span className="hero__count">{String(index + 1).padStart(2, "0")}</span>

          <button
            type="button"
            className="hero__arrow hero__arrow--next"
            onClick={() => go(1)}
            aria-label="Next slide"
          >
            <LongArrow />
          </button>

          <span className="hero__count hero__count--muted">
            {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </div>

    </section>
  );
}
