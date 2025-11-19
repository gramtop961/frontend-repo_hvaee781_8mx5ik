import { Menu, Shield, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Tools", href: "#tools" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 p-[2px]">
              <div className="h-full w-full rounded-md bg-slate-900 flex items-center justify-center">
                <Shield className="h-5 w-5 text-emerald-400" />
              </div>
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-tight">SecPros LLC</p>
              <p className="text-xs text-slate-300/80">DevOps • Cloud • Security</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-200 hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition"
            >
              <Phone className="h-4 w-4" />
              Free Consult
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-200"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-slate-200 hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white"
              >
                <Mail className="h-4 w-4" />
                Free Consult
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
