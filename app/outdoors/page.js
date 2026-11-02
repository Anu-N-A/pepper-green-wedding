import Image from "next/image";
import InstagramStrip from "@/components/InstagramStrip";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const BOOK_URL =
  "https://app.studioninja.co/contactform/hosted/0a800fc9-7177-1d88-8171-984deecd242d/0a800fc9-7177-1d88-8171-a06699122a75";

const PHOTOS = [
  {
    src: "/images/img 1.jpg",
    alt: "A couple walking together along a garden path",
    position: "50% 45%",
    wide: true,
  },
  {
    src: "/images/Screenshot 2026-10-31 182216.png",
    alt: "A couple leaning on a vintage red car",
    position: "50% 40%",
  },
  {
    src: "/images/pic 2 (3).jpg",
    alt: "A bride in red standing beside a doorway in the sun",
    position: "50% 40%",
  },
  {
    src: "/images/img 4.jpg",
    alt: "A bride holding a peacock feather, dressed in white and gold",
    position: "50% 35%",
  },
];

export default function OutdoorsPage() {
  return (
    <div className="subpage">
      <SiteHeader base="/" solid />

      <main>
        <section className="subpage__hero">
          <Reveal>
            <p className="subpage__eyebrow">Beginning of a Journey</p>
            <h1 className="subpage__title">Outdoors</h1>
            <p className="subpage__lede">
              Lakes, arches, gardens and open sky — celebrations that begin
              outside, where the light changes through the day and the
              landscape becomes part of the story.
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
