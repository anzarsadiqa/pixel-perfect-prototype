import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Menu, MessageCircle, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/asbaab-logo.svg";
import heroImage from "@/assets/asbaab-hero.jpg";
import ivoryImage from "@/assets/collection-ivory.jpg";
import redImage from "@/assets/collection-red.jpg";
import gownImage from "@/assets/collection-gown.jpg";
import anarkaliImage from "@/assets/collection-anarkali.jpg";
import champagneImage from "@/assets/product-champagne.jpg";
import maroonImage from "@/assets/product-maroon.jpg";
import blushImage from "@/assets/product-blush.jpg";
import momentImage from "@/assets/moment-editorial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ASBAAB by Madiha Farooq | Bridal Couture Mumbai" },
      { name: "description", content: "Discover handcrafted bridal couture, lehengas, gowns and anarkalis by ASBAAB in Mumbai." },
      { property: "og:title", content: "ASBAAB by Madiha Farooq | Bridal Couture" },
      { property: "og:description", content: "Bespoke bridal couture, crafted in Mumbai for the moments that become memories." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const whatsappNumber = "919819954540";
const whatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const collections = [
  { name: "Bridal Couture", image: redImage },
  { name: "Lehengas", image: ivoryImage },
  { name: "Gowns", image: gownImage },
  { name: "Anarkalis", image: anarkaliImage },
];

const products = [
  { name: "Mehrunisa Bridal Lehenga", price: "₹2,85,000", image: redImage },
  { name: "Noor Ivory Lehenga", price: "₹2,45,000", image: ivoryImage },
  { name: "Gulnaar Velvet Ensemble", price: "₹1,95,000", image: maroonImage },
  { name: "Zariya Champagne Lehenga", price: "₹1,75,000", image: champagneImage },
  { name: "Meher Blush Lehenga", price: "₹1,55,000", image: blushImage },
  { name: "Aafreen Draped Gown", price: "₹1,35,000", image: gownImage },
];

function BrandLogo() {
  return (
    <img
      src={logoImage}
      alt="ASBAAB by Madiha Farooq"
      className="h-12 w-[140px] object-contain"
      width={700}
      height={240}
    />
  );
}

function Index() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/15 bg-hero-veil text-primary-foreground backdrop-blur-sm">
        <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 lg:px-10">
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            <a href="#home" className="nav-link">Home</a>
            <a href="#collections" className="nav-link">Collections</a>
            <a href="#bridal" className="nav-link">Bridal Couture</a>
            <a href="#about" className="nav-link">About</a>
          </nav>
          <button className="justify-self-start text-primary-foreground lg:hidden" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <Menu size={22} strokeWidth={1.4} />
          </button>
          <a href="#home" aria-label="ASBAAB home" className="justify-self-center"><BrandLogo /></a>
          <div className="flex items-center justify-self-end gap-4">
            <a href="#edit" aria-label="Search"><Search size={18} strokeWidth={1.4} /></a>
            <a href="https://instagram.com/asbaabofficial" target="_blank" rel="noreferrer" aria-label="Instagram" className="hidden sm:block"><Instagram size={18} strokeWidth={1.4} /></a>
            <a href={whatsappUrl("Hello ASBAAB, I would like to enquire about your bridal couture.")} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hidden sm:block"><MessageCircle size={18} strokeWidth={1.4} /></a>
            <button aria-label={`Shopping bag with ${cartCount} items`} className="relative">
              <ShoppingBag size={19} strokeWidth={1.4} />
              {cartCount > 0 && <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-accent text-[0.56rem] font-bold text-accent-foreground">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-primary p-7 text-primary-foreground animate-fade-in">
          <div className="flex items-center justify-between"><BrandLogo /><button aria-label="Close menu" onClick={closeMenu}><X /></button></div>
          <nav className="mt-20 flex flex-col gap-8 font-display text-4xl">
            {[['Home','home'],['Collections','collections'],['Bridal Couture','bridal'],['About','about']].map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          </nav>
        </div>
      )}

      <section id="home" className="relative min-h-[92svh] overflow-hidden bg-primary">
        <img src={heroImage} alt="Bride in a deep red embroidered ASBAAB lehenga" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" width={1536} height={1920} />
        <div className="absolute inset-0 bg-hero-shade" />
        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-[1440px] items-end px-6 pb-16 pt-28 sm:items-center sm:pb-0 lg:px-14">
          <div className="max-w-2xl text-primary-foreground animate-fade-in">
            <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-gold-soft">By Madiha Farooq · Mumbai</p>
            <h1 className="font-display text-5xl leading-[0.98] sm:text-7xl lg:text-[5.7rem]">The Art of<br/><em className="font-normal">Bridal Couture</em></h1>
            <a href="#collections" className={cn(buttonVariants({ variant: "light" }), "mt-9")}>Explore Collection</a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center sm:py-32">
        <p className="section-kicker">The House of ASBAAB</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">Crafted for the moments<br className="hidden sm:block"/> that become <em>memories.</em></h2>
        <div className="mx-auto mt-9 h-px w-14 bg-accent" />
        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-muted-foreground">An ode to heritage craftsmanship, each ASBAAB creation brings together intricate handwork, timeless silhouettes and a distinctly modern sensibility.</p>
      </section>

      <section id="collections" className="px-4 pb-24 sm:px-8 sm:pb-32">
        <div className="mb-10 flex items-end justify-between"><div><p className="section-kicker">Discover</p><h2 className="mt-2 font-display text-4xl sm:text-5xl">Explore Collection</h2></div><span className="hidden text-xs uppercase tracking-[0.18em] text-muted-foreground sm:block">Couture · 2026</span></div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
          {collections.map((item) => (
            <a key={item.name} href="#edit" className="group relative aspect-[3/4] overflow-hidden bg-muted">
              <img src={item.image} alt={item.name} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
              <div className="absolute inset-0 bg-card-shade" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground sm:p-7"><p className="font-display text-xl sm:text-3xl">{item.name}</p><span className="mt-2 inline-block border-b border-primary-foreground/70 pb-1 text-[0.6rem] uppercase tracking-[0.18em]">View Collection</span></div>
            </a>
          ))}
        </div>
      </section>

      <section id="edit" className="bg-secondary px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1440px] text-center"><p className="section-kicker">Signature Pieces</p><h2 className="mt-2 font-display text-4xl sm:text-5xl">The ASBAAB Edit</h2><p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">Made to order in our Mumbai atelier. Bespoke colour and fit consultations available.</p></div>
        <div className="mx-auto mt-14 grid max-w-[1440px] grid-cols-2 gap-x-3 gap-y-12 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-16">
          {products.map((product) => (
            <article key={product.name} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-muted"><img src={product.image} alt={product.name} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" /></div>
              <div className="pt-5 text-center"><h3 className="font-display text-lg sm:text-2xl">{product.name}</h3><p className="mt-1 text-xs tracking-[0.08em] text-muted-foreground">{product.price}</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <Button onClick={() => setCartCount((count) => count + 1)} className="w-full">Add to Cart</Button>
                  <a href={whatsappUrl(`Hello ASBAAB, I would like to buy the ${product.name} (${product.price}).`)} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>Buy Now</a>
                </div>
                <a href={whatsappUrl(`Hello ASBAAB, I would like to enquire about the ${product.name}.`)} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-[0.62rem] uppercase tracking-[0.15em] text-muted-foreground hover:text-primary"><MessageCircle size={13}/> WhatsApp / Enquire</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="bridal" className="relative min-h-[78svh] overflow-hidden">
        <img src={momentImage} alt="ASBAAB bride in a palace courtyard" loading="lazy" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[46%_center]" />
        <div className="absolute inset-0 bg-moment-shade" />
        <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-[1440px] items-end px-6 pb-16 sm:items-center sm:justify-end sm:px-12 sm:pb-0"><div className="max-w-xl text-primary-foreground"><p className="section-kicker text-gold-soft">Bespoke Bridal</p><h2 className="mt-4 font-display text-5xl sm:text-7xl">Made for<br/><em>Your Moment</em></h2><p className="mt-5 max-w-md text-sm leading-7 text-primary-foreground/75">Begin a personal couture journey with Madiha Farooq and our atelier in Mumbai.</p><a href={whatsappUrl("Hello ASBAAB, I would like to book a bridal couture consultation.")} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "light" }), "mt-8")}>WhatsApp / Enquire</a></div></div>
      </section>

      <section id="about" className="grid lg:grid-cols-2">
        <div className="flex items-center px-7 py-20 sm:px-16 lg:px-24 lg:py-32"><div className="max-w-xl"><p className="section-kicker">Our Story</p><h2 className="mt-4 font-display text-4xl sm:text-6xl">ASBAAB<br/><span className="text-3xl italic sm:text-4xl">by Madiha Farooq</span></h2><p className="mt-8 text-sm leading-7 text-muted-foreground">Born in Mumbai and shaped by a reverence for the subcontinent’s rich textile traditions, ASBAAB creates bridal heirlooms with a contemporary soul. Every silhouette is considered, every motif hand-finished, and every detail made personal to the woman who wears it.</p><p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em]">Mumbai, India · Bespoke by appointment</p></div></div>
        <div className="min-h-[560px] overflow-hidden"><img src={anarkaliImage} alt="Emerald ASBAAB anarkali" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" /></div>
      </section>

      <section className="px-3 py-24 text-center sm:px-6 sm:py-32"><p className="section-kicker">Instagram</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">Follow the ASBAAB Bride</h2><a href="https://instagram.com/asbaabofficial" target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs uppercase tracking-[0.18em] text-muted-foreground">@asbaabofficial</a><div className="mx-auto mt-12 grid max-w-[1440px] grid-cols-3 gap-1 sm:grid-cols-6 sm:gap-2">{products.map((item) => <a key={item.name} href="https://instagram.com/asbaabofficial" target="_blank" rel="noreferrer" className="group aspect-square overflow-hidden"><img src={item.image} alt="ASBAAB bridal edit" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></a>)}</div></section>

      <footer className="bg-primary px-6 py-16 text-primary-foreground sm:px-10"><div className="mx-auto grid max-w-[1440px] gap-12 border-b border-primary-foreground/15 pb-14 sm:grid-cols-3"><div><BrandLogo/><p className="mt-4 max-w-xs text-xs leading-6 text-primary-foreground/60">Bridal couture made with patience, artistry and a deep love for timeless craft.</p></div><div><p className="footer-title">Collections</p><div className="mt-5 flex flex-col gap-3 text-xs text-primary-foreground/65"><a href="#bridal">Bridal Couture</a><a href="#collections">Lehengas</a><a href="#collections">Gowns</a><a href="#collections">Anarkalis</a></div></div><div><p className="footer-title">Visit & Connect</p><div className="mt-5 flex flex-col gap-3 text-xs text-primary-foreground/65"><span>Mumbai, India</span><a href={whatsappUrl("Hello ASBAAB, I would like to enquire about your couture.")} target="_blank" rel="noreferrer">+91 98199 54540</a><a href="https://instagram.com/asbaabofficial" target="_blank" rel="noreferrer">Instagram · @asbaabofficial</a></div></div></div><div className="mx-auto flex max-w-[1440px] flex-col gap-3 pt-7 text-[0.58rem] uppercase tracking-[0.16em] text-primary-foreground/45 sm:flex-row sm:justify-between"><span>© 2026 ASBAAB by Madiha Farooq</span><span>Made in Mumbai</span></div></footer>

      <a href={whatsappUrl("Hello ASBAAB, I would like to enquire about your bridal couture.")} target="_blank" rel="noreferrer" aria-label="Enquire on WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-13 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-luxury transition-transform hover:scale-105"><MessageCircle size={23} /></a>
    </main>
  );
}
