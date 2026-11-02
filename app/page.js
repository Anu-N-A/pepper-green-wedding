import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import InstagramStrip from "@/components/InstagramStrip";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

/* Reference “Book Now” button points at the StudioNinja contact form */
const BOOK_URL =
  "https://app.studioninja.co/contactform/hosted/0a800fc9-7177-1d88-8171-984deecd242d/0a800fc9-7177-1d88-8171-a06699122a75";

/* Reference “See My Work” feature-link cards */
const WORK = [
  {
    title: "Wedding",
    subtitle: "The Big Day",
    href: "/stories",
    image: "/images/Screenshot 2026-10-31 181855.png",
    alt: "A joyful couple celebrating with raised arms in traditional wedding attire",
    position: "50% 38%",
  },
  {
    title: "Films",
    subtitle: "Creativity Show",
    href: "/films",
    image: "/images/img.jpg",
    alt: "A couple walking hand in hand through warm evening light",
    position: "50% 40%",
  },
  {
    title: "Outdoors",
    subtitle: "Beginning of a Journey",
    href: "/outdoors",
    image: "/images/Screenshot 2026-10-31 182122.png",
    alt: "A bride in a white gown standing in a sunlit garden",
    position: "50% 45%",
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
                  src="/images/hero-1.jpg"
                  alt="A couple laughing together beneath floral garlands"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  quality={85}
                  style={{ objectPosition: "50% 42%" }}
                />
              </figure>
              <figure className="about__figure">
                <Image
                  src="/images/hero-2.jpg"
                  alt="A groom placing a ring on his bride's finger under a white floral arch"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  quality={85}
                  style={{ objectPosition: "50% 42%" }}
                />
              </figure>
              <figure className="about__figure">
                <Image
                  src="/images/hero-3.jpg"
                  alt="A couple framed by a carved stone arch beside a still lake"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  quality={85}
                  style={{ objectPosition: "50% 50%" }}
                />
              </figure>
            </Reveal>

            {/* ——— About Us Brief ——— */}
            <Reveal className="about-brief" delay={160}>
              <h3 className="about-brief__title">About Us Brief</h3>
              <div className="about-brief__copy">
                <p>
                  At Pepper Green Wedding, we specialize in capturing beautiful, timeless moments that turn into treasured memories for a lifetime. Our frames are filled with real,<br className="brief-break" />{" "}
                  raw emotions, ensuring that every time you look back, you relive the laughter, joy, and love of your special day.
                </p>
                <p>
                  With a keen eye for detail and a passion for storytelling, our cameras never miss a moment. This dedication has made us one of the best wedding photographers<br className="brief-break" />{" "}
                  in Kerala, Bangalore, and across India. Whether it&apos;s a destination wedding, candid photography, or traditional wedding films, we create visuals that bring your love<br className="brief-break" />{" "}
                  story to life.
                </p>
              </div>
            </Reveal>

            {/* ——— Most Romantic Emotional Wedding Story ——— */}
            <Reveal className="wedding-story-feature" delay={200}>
              <div className="wedding-story-feature__body">
                <h3 className="wedding-story-feature__title">
                  <span>MOST ROMANTIC</span>
                  <span>EMOTIONAL WEDDING</span>
                  <span>STORY</span>
                </h3>
                <div className="wedding-story-feature__copy">
                  <p>
                    Goodbyes are never easy. As Sruthy steps into a<br className="story-break" />{" "}
                    new chapter with Rahul, her family holds back<br className="story-break" />{" "}
                    tears, cherishing the countless memories<br className="story-break" />{" "}
                    they&apos;ve shared. For them, she is more than just<br className="story-break" />{" "}
                    a daughter, a sister, or a loved one—she is a<br className="story-break" />{" "}
                    part of their hearts.
                  </p>
                  <p>
                    This wedding film beautifully captures the raw<br className="story-break" />{" "}
                    emotions of love, longing, and bittersweet<br className="story-break" />{" "}
                    goodbyes, reminding us how deeply weddings<br className="story-break" />{" "}
                    touch our souls. As they try to hold back their<br className="story-break" />{" "}
                    tears, their love speaks louder than words.
                  </p>
                </div>
              </div>

              <div className="wedding-story-feature__media">
                <div className="wedding-story-feature__card">
                  <Image
                    src="/images/story-film.jpg"
                    alt="Most Romantic Emotional Wedding Story — Sruthy & Rahul"
                    fill
                    sizes="(max-width: 820px) 100vw, 745px"
                    quality={85}
                  />
                  <div className="wedding-story-feature__scrim" aria-hidden="true" />
                  <a
                    href="/films"
                    className="wedding-story-feature__play"
                    aria-label="Play Most Romantic Emotional Wedding Story Film"
                  >
                    <svg
                      viewBox="0 0 72 72"
                      fill="none"
                      className="play-icon"
                      aria-hidden="true"
                    >
                      <circle
                        cx="36"
                        cy="36"
                        r="34"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <polygon
                        points="31,24 49,36 31,48"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——— Wedding Story — Suman & Elisabetta (reference info block) ——— */}
        <section className="story-hero" aria-label="Wedding story — Suman and Elisabetta">
          <Reveal className="story-hero__photo">
            <Image
              src="/images/img 2.jpg"
              alt="A bride in a red lehenga walking with her parents through a garden"
              fill
              sizes="100vw"
              quality={88}
              style={{ objectPosition: "50% 60%" }}
            />
            <div className="story-hero__content">
              <span className="story-hero__eyebrow">Wedding Story</span>
              <h2 className="story-hero__title">Suman &amp; Elisabetta</h2>
            </div>
          </Reveal>

          <Reveal className="story-hero__card" delay={120}>
            <p>
              At Pepper Green Wedding, passion and creativity drive everything we do. Our team is dedicated to capturing stunning, emotion-filled moments that you&apos;ll cherish forever. When you choose us, you&apos;re not just getting photographers—you&apos;re getting a team that is professional, timely, attentive, and truly passionate about their craft.
            </p>
            <a
              className="story-hero__button"
              href="https://youtu.be/9T4fRC9kn-A"
              target="_blank"
              rel="noreferrer"
            >
              Wedding Film
            </a>
          </Reveal>
        </section>

        {/* ——— Proposal story — Cyriac & Sherin (reference info block) ——— */}
        <section
          className="story-hero story-hero--proposal"
          aria-label="Proposal story — Cyriac and Sherin"
        >
          <Reveal className="story-hero__photo">
            <Image
              src="/images/proposal.jpg"
              alt="A couple hugging under a “Will You Marry Me?” sign on the beach"
              fill
              sizes="100vw"
              quality={88}
            />
            <div className="story-hero__content">
              <span className="story-hero__eyebrow">
                A moment straight out of a dream
              </span>
              <h2 className="story-hero__title">
                — a surprise “Marry Me” proposal
                <br className="story-hero__title-break" /> under the rain, by the
                waves
              </h2>
            </div>
          </Reveal>

          <Reveal className="story-hero__card" delay={120}>
            <p>
              Cyriac &amp; Sherin — a love story written in rain and waves.
              <br />
              A magical “Marry Me” moment by the beach, where he went down on one
              knee under the drizzle, and she said YES!
              <br />
              Because when it’s true love, even the rain joins the celebration.
            </p>
            <a
              className="story-hero__button"
              href="https://youtu.be/xHN4hMGhXvc"
              target="_blank"
              rel="noreferrer"
            >
              Proposal Video
            </a>
          </Reveal>
        </section>

        {/* ——— See My Work (reference feature-links cards) ——— */}
        <section id="work" className="section see-work">
          <div className="see-work__container">
            <Reveal className="see-work__head">
              <h2>See My Work</h2>
            </Reveal>

            <div className="see-work__row">
              {WORK.map((item) => (
                <Reveal key={item.title} className="work-card">
                  <a
                    href={item.href}
                    className="work-card__link"
                    aria-label={`${item.title} — ${item.subtitle}`}
                  >
                    <div className="work-card__photo">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                        quality={85}
                        style={{ objectPosition: item.position }}
                      />
                      <span
                        className="work-card__tint"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="work-card__content">
                      <h2 className="work-card__title">{item.title}</h2>
                      <p className="work-card__subtitle">{item.subtitle}</p>
                      <svg
                        className="work-card__arrow"
                        width="70"
                        height="12"
                        viewBox="0 0 70 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M0 6h67m0 0l-5.5-5M67 6l-5.5 5"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal className="see-work__cta">
              <a className="btn btn--outline" href="/stories">
                See more galleries
              </a>
            </Reveal>
          </div>
        </section>

        {/* ——— Quote (reference quote style-2) ——— */}
        <section className="section quote-block">
          <Reveal className="quote">
            <p className="quote__quote">
              “My heart overflows with the love we created. It feels like
              sunshine”
            </p>
            <span className="quote__line" aria-hidden="true" />
            <p className="quote__source">—Rodolfo Eduardo</p>
          </Reveal>
        </section>

        {/* ——— Featured post (reference featured-post style-1) ——— */}
        <section className="featured-post">
          <Reveal>
            <a
              className="featured-post__link"
              href="/stories"
              aria-label="Read the featured story"
            >
              <div className="featured-post__photo">
                <Image
                  src="/images/hero-3.jpg"
                  alt="A couple framed by a carved stone arch beside a still lake"
                  fill
                  sizes="100vw"
                  quality={85}
                  style={{ objectPosition: "50% 50%" }}
                />
              </div>

              <div className="featured-post__text">
                <div className="featured-post__heading">
                  <h2 className="featured-post__title">
                    Unveiling the Magic of Bhagya and Prabhu&apos;s Haldi
                    Ceremony: A Day of Love and Traditions
                  </h2>
                  <p className="featured-post__date">March 26, 2025</p>
                </div>

                <svg
                  className="featured-post__arrow"
                  width="120"
                  height="12"
                  viewBox="0 0 120 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 6h118m0 0l-5.5-5M118 6l-5.5 5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </a>
          </Reveal>

          <Reveal className="featured-post__cta">
            <a className="btn btn--outline" href={BOOK_URL}>
              Book Now
            </a>
          </Reveal>
        </section>

        {/* ——— Instagram ——— */}
        <InstagramStrip />

        <SiteFooter />
      </main>
    </>
  );
}
