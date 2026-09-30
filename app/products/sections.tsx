import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return <section className="wrap page-intro"><span className="eyebrow"><span className="tiny-square" />{label}</span><h1>{title}</h1><p>{description}</p></section>
}

export function ContactBanner() {
  return <section className="wrap contact-banner"><div><span className="eyebrow">Good things start with a conversation</span><h2>What are you<br />thinking of building<span>?</span></h2></div><div><p>A new product, a tricky infrastructure problem, or an idea that won’t leave you alone. We’d like to hear it.</p><Link href="/contact" className="button button-orange">Let’s make it happen <ArrowUpRight size={18} /></Link></div><span className="banner-asterisk" aria-hidden="true">✳</span></section>
}

