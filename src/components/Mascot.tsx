import mascotSrc from '../assets/sprout-mascot.webp'

/** The Sprout mascot (single consistent character). Transparent WebP, ~85 kB. */
export default function Mascot({ className = '' }: { className?: string }) {
  return (
    <img
      src={mascotSrc}
      width={532}
      height={720}
      alt="Sprout, our friendly sprout mascot, waving hello and holding a small green book"
      decoding="async"
      className={className}
    />
  )
}
