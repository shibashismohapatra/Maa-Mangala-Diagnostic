import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";

// Quick links for Diagnostic Center
const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/packages", label: "Health Packages" },
  { href: "/services", label: "Diagnostic Services" },
  { href: "/doctors", label: "Our Doctors" },
  { href: "/contact", label: "Contact Us" },
  { href: "/book-appointment", label: "Book Appointment" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand - No Image */}
          <div className="lg:col-span-1">
            <div className="text-xl font-bold text-white">
              {siteConfig.brandName}
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Accurate diagnostic services, blood tests, ECG, and health checkup 
              packages in Puri, Odisha. Home collection available with expert doctors.
            </p>
            
            {/* Social Links */}
            <div className="mt-4 flex gap-2">
              {siteConfig.instagramUrl && (
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition hover:bg-cyan-600 hover:text-white"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                  </svg>
                </a>
              )}
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition hover:bg-green-600 hover:text-white"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Health Packages */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Health Packages
            </h3>
            <ul className="mt-3 space-y-2">
              {siteConfig.healthPackages?.map((pkg) => (
                <li key={pkg.slug}>
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="text-sm text-zinc-400 transition hover:text-cyan-400"
                  >
                    {pkg.name} - ₹{pkg.price}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/packages"
                  className="text-sm text-cyan-400 transition hover:text-cyan-300"
                >
                  View All Packages →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Info
            </h3>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                <span className="text-sm">{siteConfig.fullAddress || siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                <div>
                  <a href={`tel:${siteConfig.phone}`} className="text-sm hover:text-cyan-400">
                    {siteConfig.phone}
                  </a>
                  {siteConfig.phoneSecondary && (
                    <>
                      <span className="mx-1 text-zinc-600">/</span>
                      <a href={`tel:${siteConfig.phoneSecondary}`} className="text-sm hover:text-cyan-400">
                        {siteConfig.phoneSecondary}
                      </a>
                    </>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm hover:text-cyan-400">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                <div className="text-sm">
                  {typeof siteConfig.timings === 'string' ? (
                    <p>{siteConfig.timings}</p>
                  ) : (
                    <>
                      <p>{siteConfig.timings?.opd}</p>
                      <p className="text-zinc-400 text-xs">
                        {siteConfig.timings?.diagnostic}
                      </p>
                    </>
                  )}
                </div>
              </li>
            </ul>

       
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-zinc-500 md:flex-row md:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="transition hover:text-zinc-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition hover:text-zinc-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}