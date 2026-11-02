import Image from "next/image";
import InstagramStrip from "@/components/InstagramStrip";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const BOOK_URL =
  "https://app.studioninja.co/contactform/hosted/0a800fc9-7177-1d88-8171-984deecd242d/0a800fc9-7177-1d88-8171-a06699122a75";

const PHOTOS = [
  {
    src: "/images/Screenshot 2026-10-31 181946.png",
    alt: "A bride standing in a decorated boat on a still lake",
    position: "50% 45%",
    wide: true,
  },
  {
    src: "/images/Screenshot 2026-10-31 182253.png",
    alt: "A couple close together, the bride in white",
    position: "50% 35%",
  },
  {
    src: "/images/Screenshot 2026-10-31 182331.png",
    alt: "A couple in warm orange attire, smiling at each other",
    position: "50% 35%",
  },
  {
    src: "/images/Screenshot 2026-10-31 182453.png",
    alt: "A couple by the water in soft pink attire",
    position: "50% 40%",
  },
];

export default function FilmsPage() {
  return (
    <div className="subpage">
      <SiteHeader base="/" solid />

      <main>
        <section className="subpage__hero">
          <Reveal>
            <p className="subpage__eyebrow">Creativity Show</p>
            <h1 className="subpage__title">Wedding Films</h1>
            <p className="subpage__lede">
              Short, honest films that feel like memory — sound, movement and
              the shake in a voice during vows, kept the way a photograph
              cannot keep them.
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
