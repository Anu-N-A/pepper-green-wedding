import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";

const STORIES = [
  {
    name: "Elise & Noah",
    place: "Tuscany, Italy",
    image: "/images/hero-2.jpg",
    alt: "A bride and groom exchanging rings beneath a white rose arch",
  },
  {
    name: "Ananya & Rohan",
    place: "Jaipur, India",
    image: "/images/portrait.jpg",
    alt: "A bride and groom smiling together in soft green light",
  },
  {
    name: "Maya & Daniel",
    place: "Big Sur, California",
    image: "/images/hero-1.jpg",
    alt: "A joyful couple celebrating in traditional wedding attire",
  },
];

const JOURNAL = [
  {
    date: "12 May 2026",
    title: "The art of a slow morning",
    excerpt:
      "Why we build the wedding day around light and feeling, not a schedule.",
  },
  {
    date: "28 Feb 2026",
    title: "Udaipur, in golden hour",
    excerpt:
      "Notes from a three-day celebration on the water, told in photographs.",
  },
  {
    date: "09 Jan 2026",
    title: "Choosing a filmmaker",
    excerpt:
      "Five questions to ask before you book the person behind the lens.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <HeroSlider />

        {/* ——— About ——— */}
        <section id="about" className="section about">
          <div className="wrap">
            <Reveal className="about__intro">
              <h2 className="about__title">
                <span className="about__title-line">Capturing Timeless Wedding</span>
                <span className="about__title-line">Moments</span>
              </h2>

              <div className="about__copy">
                <p>
                  A wedding is a collection of priceless moments that deserve to
                  be cherished forever. While life doesn’t have a rewind button,
                  wedding photography ensures you relive your special day over
                  and over again. At Pepper Green Wedding, we specialize in
                  capturing the beauty, emotions, and joy of your big day,
                  preserving them as if they happened just yesterday.
                </p>
                <p>
                  Best Wedding Photography in Kerala – Kochi – Bangalore |
                  India | UK | Dubai
                  <br />
                  Destination Wedding Photography | Candid &amp; Traditional
                  Wedding Films
                </p>
              </div>
            </Reveal>

            <Reveal className="about__gallery" delay={120}>
              <figure className="about__figure">
                <Image
                  src="/images/intro-1.webp"
                  alt="Two women in pastel outfits walking through a garden at a wedding"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  quality={85}
                />
              </figure>
              <figure className="about__figure">
                <Image
                  src="/images/intro-2.webp"
                  alt="A bride walking with her parents through a flower-lined lawn"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  quality={85}
                />
              </figure>
              <figure className="about__figure">
                <Image
                  src="/images/intro-3.webp"
                  alt="A bride and groom holding hands in warm evening light"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  quality={85}
                />
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ——— Stories ——— */}
        <section id="stories" className="section section--tint stories">
          <div className="wrap">
            <Reveal className="section-head">
              <div>
                <p className="eyebrow">Stories</p>
                <h2>Recent celebrations</h2>
              </div>
              <a className="text-link" href="#contact">
                Enquire about your date
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>

            <Reveal className="stories__grid">
              {STORIES.map((story) => (
                <article className="story-card" key={story.name}>
                  <Image
                    src={story.image}
                    alt={story.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    quality={85}
                  />
                  <div className="story-card__scrim" aria-hidden="true" />
                  <div className="story-card__body">
                    <h3>{story.name}</h3>
                    <p>{story.place}</p>
                  </div>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ——— Films ——— */}
        <section id="films" className="films">
          <Image
            src="/images/hero-3.jpg"
            alt="A couple framed by a carved stone arch beside a still lake"
            fill
            sizes="100vw"
            quality={85}
          />
          <div className="films__scrim" aria-hidden="true" />

          <div className="films__inner">
            <Reveal className="films__body">
              <p className="eyebrow eyebrow--light">Films</p>
              <h2>
                Your day, <em>in motion.</em>
              </h2>
              <p>
                Sound, movement, the shake in a voice during vows — films hold
                the parts a photograph cannot. We make short, honest films that
                feel like memory, not montage.
              </p>
              <a className="text-link text-link--light" href="#contact">
                Commission a wedding film
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* ——— Journal / Blog ——— */}
        <section id="blog" className="section journal">
          <div className="wrap">
            <Reveal className="section-head">
              <div>
                <p className="eyebrow">Blog</p>
                <h2>From the journal</h2>
              </div>
            </Reveal>

            <Reveal className="journal__list">
              {JOURNAL.map((entry, index) => (
                <article className="journal__row" key={entry.title}>
                  <span className="journal__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="journal__date">{entry.date}</span>
                  <h3 className="journal__title">{entry.title}</h3>
                  <p className="journal__excerpt">{entry.excerpt}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ——— Contact ——— */}
        <footer id="contact" className="contact">
          <div className="wrap contact__inner">
            <Reveal>
              <p className="eyebrow eyebrow--light">Contact</p>
              <h2>
                Let&apos;s tell <em>your story.</em>
              </h2>
              <p className="contact__lede">
                We take on a limited number of weddings each year. Tell us about
                your day — the place, the people, the feeling you are after.
              </p>

              <a className="contact__mail" href="mailto:hello@peppergreen.com">
                hello@peppergreen.com
              </a>

              <div className="contact__details">
                <span>+91 98765 43210</span>
                <span aria-hidden="true">·</span>
                <span>Jaipur · Goa · Worldwide</span>
              </div>
            </Reveal>

            <div className="contact__foot">
              <a className="logo logo--footer" href="#home">
                <span className="logo__name">
                  pepper green
                  <sup>®</sup>
                </span>
                <span className="logo__sub">Wedding Company</span>
              </a>

              <div className="contact__social">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                  Pinterest
                </a>
                <a href="https://vimeo.com" target="_blank" rel="noreferrer">
                  Vimeo
                </a>
              </div>

              <p className="contact__copy">
                © {new Date().getFullYear()} Pepper Green Wedding Company
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
