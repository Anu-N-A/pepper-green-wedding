import Image from "next/image";
import InstagramStrip from "@/components/InstagramStrip";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const BOOK_URL =
  "https://app.studioninja.co/contactform/hosted/0a800fc9-7177-1d88-8171-984deecd242d/0a800fc9-7177-1d88-8171-a06699122a75";

const PHOTOS = [
  {
    src: "/images/Screenshot 2026-10-31 182515.png",
    alt: "A couple sitting together among pigeons in soft daylight",
    position: "50% 45%",
    wide: true,
  },
  {
    src: "/images/img 2.jpg",
    alt: "A large family walking together through a garden at a wedding",
    position: "50% 40%",
  },
  {
    src: "/images/Screenshot 2026-10-31 181735.png",
    alt: "A couple walking together in white traditional attire",
    position: "50% 40%",
  },
  {
    src: "/images/Screenshot 2026-10-31 181931.png",
    alt: "A couple smiling closely together",
    position: "50% 35%",
  },
];

export default function StoriesPage() {
  return (
    <div className="subpage">
      <SiteHeader base="/" solid />

      <main>
        <section className="subpage__hero">
          <Reveal>
            <p className="subpage__eyebrow">The Big Day</p>
            <h1 className="subpage__title">Wedding Stories</h1>
            <p className="subpage__lede">
              Full wedding days, told from the quiet morning light to the last
              dance — ceremonies, families and the small in-between moments
              that make the day yours.
            </p>
          </Reveal>
        </section>

        <section className="subpage__gallery">
          {PHOTOS.map((photo, index) => (
            <Reveal
              key={photo.src}
              className={`subpage__figure${photo.wide ? " subpage__figure--wide" : ""}`}
              delay={index * 60}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 33vw"
                quality={85}
                style={{ objectPosition: photo.position }}
              />
            </Reveal>
          ))}
        </section>

        <Reveal className="subpage__cta">
          <a className="btn btn--outline" href={BOOK_URL}>
            Book Now
          </a>
        </Reveal>

        <InstagramStrip />
      </main>

      <SiteFooter />
    </div>
  );
}
