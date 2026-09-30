import Image from "next/image"

// Brand assets sourced from each product's official website.
const logos: Record<string, string> = {
  cloudploy: "/products/cloudploy.svg",
  skaleagents: "/products/skaleagents.svg",
  crontinel: "/products/crontinel.png",
  toolblip: "/products/toolblip.svg",
  amazingplugins: "/products/amazingplugins.jpg",
  harun: "/products/harun.svg",
}

export default function ProductIcon({ id, size = 24 }: { id: string; size?: number }) {
  const src = logos[id]
  if (!src) return null

  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      unoptimized
      className="product-brand-image"
      style={{ width: size, height: size, objectFit: "contain", flexShrink: 0 }}
    />
  )
}
