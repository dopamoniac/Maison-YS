import { Link } from "wouter";
import logoImage from "@assets/logo_fin_1776545929744.png";

export default function Footer() {
  return (
    <footer className="bg-obsidian text-stone border-t border-white/5 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2 flex flex-col items-start gap-6">
            <Link href="/">
              <img src={logoImage} alt="Maison YS" className="h-12 w-auto object-contain cursor-pointer" />
            </Link>
            <p className="font-serif text-xl tracking-wide text-stone/80">
              Expressions de Parfum Raffinées
            </p>
            <p className="text-sm text-stone/60 max-w-sm leading-relaxed">
              Maison YS crée des parfums qui existent à l'intersection du souvenir et du désir.
              Élaborés en quantités limitées pour ceux qui comprennent la différence.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg tracking-widest uppercase text-gold mb-2">Explorer</h4>
            <Link href="/collection"><span className="text-sm tracking-widest uppercase hover:text-gold transition-colors cursor-pointer text-stone/70">Collection</span></Link>
            <Link href="/maison"><span className="text-sm tracking-widest uppercase hover:text-gold transition-colors cursor-pointer text-stone/70">La Maison</span></Link>
            <Link href="/gifting"><span className="text-sm tracking-widest uppercase hover:text-gold transition-colors cursor-pointer text-stone/70">Cadeaux</span></Link>
            <Link href="/contact"><span className="text-sm tracking-widest uppercase hover:text-gold transition-colors cursor-pointer text-stone/70">Contact</span></Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg tracking-widest uppercase text-gold mb-2">Nous Joindre</h4>
            <a href="tel:+33626070850" className="text-sm tracking-widest hover:text-gold transition-colors text-stone/70">+33 6 26 07 08 50</a>
            <a href="mailto:maisonys06@gmail.com" className="text-sm tracking-widest hover:text-gold transition-colors text-stone/70">maisonys06@gmail.com</a>
            <p className="text-sm text-stone/70">2 bd Raimbaldi, Nice, 06000</p>
            <a href="https://www.facebook.com/profile.php?id=61572084282268" target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest uppercase hover:text-gold transition-colors text-stone/70">Facebook</a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-widest text-stone/40 uppercase">
            &copy; {new Date().getFullYear()} Maison YS. Tous droits réservés.
          </p>
          <p className="text-xs tracking-widest text-stone/40 uppercase">Nice, France</p>
        </div>
      </div>
    </footer>
  );
}
