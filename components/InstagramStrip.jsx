import Image from "next/image";

/* Reference: instagram-graph block — centered title linking to the profile,
   followed by a gapless row of square photos (padding-bottom 100%). */
const TILES = [
  {
    src: "/images/Screenshot 2026-10-31 182239.png",
    alt: "A couple smiling together in soft light",
    position: "50% 35%",
  },
  {
    src: "/images/Screenshot 2026-10-31 182350.png",
    alt: "A bride and groom in traditional red and gold attire",
    position: "50% 35%",
  },
  {
    src: "/images/img 6.jpg",
    alt: "A bride lifting her veil, smiling",
    position: "50% 30%",
  },
  {
    src: "/images/Screenshot 2026-10-31 182037.png",
    alt: "A bride holding a white and peach bouquet",
    position: "50% 35%",
  },
  {
    src: "/images/Screenshot 2026-10-31 182318.png",
    alt: "A couple walking hand in hand in warm orange attire",
    position: "50% 40%",
  },
  {
    src: "/images/img 5.jpg",
    alt: "Black and white — two hands holding a bouquet",
    position: "50% 50%",
  },
  {
    src: "/images/Screenshot 2026-10-31 182436.png",
    alt: "A couple laughing together in green and pink outfits",
    position: "50% 35%",
  },
  {
    src: "/images/Screenshot 2026-10-31 182159.png",
    alt: "A couple beside a vintage red car",
    position: "50% 40%",
  },
];

export default function InstagramStrip() {
  return (
    <section className="instagram" aria-label="Instagram">
      <a
        className="instagram__head"
        href="https://www.instagram.com/peppergreenwedding"
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="instagram__title">Follow me on Instagram</h3>
      </a>

      <div className="instagram__row">
        {TILES.map((tile) => (
          <a
            key={tile.src + tile.position}
            className="instagram__tile"
            href="https://www.instagram.com/peppergreenwedding"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Pepper Green on Instagram"
          >
            <Image
              src={tile.src}
              alt={tile.alt}
              fill
              sizes="(max-width: 767px) 50vw, (max-width: 991px) 20vw, 14vw"
              quality={80}
              style={{ objectPosition: tile.position }}
            />
            <span className="instagram__tint" aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}
