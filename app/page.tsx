"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Users,
  ShieldCheck,
  Smartphone,
  Rocket,
  Zap,
  CheckCircle2,
  Mail,
  Menu,
  X,
} from "lucide-react";

// GENY JOBDESK – Single-file landing page component
// Usage: place this file as app/page.tsx in a Next.js (App Router) project with Tailwind configured.
// Dependencies: framer-motion, lucide-react
//   npm i framer-motion lucide-react

const navItems = [
  { id: "features", label: "Features" },
  { id: "candidates", label: "For Candidates" },
  { id: "recruiters", label: "For Recruiters" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Page() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Top announcement */}
      <div className="w-full bg-emerald-500/10 border-b border-emerald-400/20 text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 text-center">
          🚀 GENY JOBDESK is in beta — be the first to try it at <span className="font-semibold">genyjobdesk.com</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png" // Place your logo file in the public folder
                alt="GENY JOBDESK Logo"
                width={100} // Adjust size as needed
                height={100}
                className="rounded-xl"
                priority
              />
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="hover:text-emerald-400/90 transition-colors"
                >
                  {n.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
                className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium hover:bg-emerald-400/20"
              >
                <Mail className="h-4 w-4" /> Get Early Access
              </a>
            </nav>
            <button
              aria-label="Toggle menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 py-4 grid gap-3">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-left hover:bg-white/10"
                >
                  {n.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-xl bg-emerald-500/20 border border-emerald-400/30 px-4 py-3 text-left"
              >
                Get Early Access
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide">
              <Rocket className="h-3.5 w-3.5" />
              Smarter hiring for a new generation
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Connect job aspirants with recruiters — instantly
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              GENY JOBDESK is a modern recruitment platform that bridges candidates and employers with verified profiles, AI-matched roles, and seamless messaging — A smarter, faster way to connect talent with opportunity.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
                className="rounded-2xl bg-emerald-500 px-6 py-3 font-medium text-slate-900 hover:bg-emerald-400"
              >
                Get Early Access
              </a>
              <button
                onClick={() => scrollTo("features")}
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium hover:bg-white/10"
              >
                Explore Features
              </button>
            </div>
          </motion.div>

          {/* Trust strip */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-80">
            {["Fast Onboarding", "Verified Profiles", "AI Matching", "Secure & Private"].map(
              (item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs">
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Features that matter</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Built for both sides of the market—GENY streamlines discovery, shortlisting, and communication.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Zap className="h-5 w-5" />, title: "Instant Profiles",
              desc: "Upload resume, auto-generate a verified profile, and go live in minutes.",
            },
            {
              icon: <Users className="h-5 w-5" />, title: "AI Role Matching",
              desc: "Smart recommendations connect the right talent to the right roles.",
            },
            {
              icon: <Building2 className="h-5 w-5" />, title: "Company Pages",
              desc: "Authentic employer branding with roles, perks, culture, and media.",
            },
            {
              icon: <Briefcase className="h-5 w-5" />, title: "1-Click Apply",
              desc: "Candidates can apply with one tap; recruiters get structured data.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />, title: "Verified & Secure",
              desc: "Layered checks for authenticity, privacy-first messaging.",
            },
            {
              icon: <Smartphone className="h-5 w-5" />, title: "Mobile-first",
              desc: "Fast, responsive experience that shines on every device.",
            },
          ].map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/20 border border-emerald-400/20">
                  {f.icon}
                </div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Split sections: Candidates / Recruiters */}
      <section className="mx-auto max-w-7xl px-4 py-8 grid gap-8 md:grid-cols-2" id="candidates">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-bold">For Candidates</h3>
          <ul className="mt-4 grid gap-3 text-sm text-white/80">
            {[
              "Build a profile from your resume in seconds",
              "Discover roles that match your skills & salary expectations",
              "1-click apply and private chat with recruiters",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8" id="recruiters">
          <h3 className="text-2xl font-bold">For Recruiters</h3>
          <ul className="mt-4 grid gap-3 text-sm text-white/80">
            {[
              "Post openings with structured requirements",
              "Get shortlists powered by AI matching & filters",
              "Message verified candidates and schedule interviews",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Simple, transparent pricing</h2>
        <p className="mt-2 text-white/70">Start free. Upgrade when you scale.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Starter",
              price: "Free",
              points: [
                "Candidate profiles",
                "Job search & 1-click apply",
                "Basic messages",
              ],
              cta: "Join Free",
            },
            {
              name: "Pro Recruiter",
              price: "$49/mo",
              points: [
                "Post up to 20 jobs",
                "AI shortlists",
                "Unlimited messaging",
              ],
              cta: "Start Pro",
              highlight: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              points: [
                "Advanced analytics",
                "ATS integrations",
                "Dedicated support",
              ],
              cta: "Talk to Sales",
            },
          ].map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border bg-white/5 p-6 ${p.highlight ? "border-emerald-400/40 shadow-emerald-500/20 shadow-xl" : "border-white/10"
                }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <span className="text-2xl font-bold">{p.price}</span>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-white/80">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" /> {pt}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-2 font-medium ${p.highlight
                ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                : "border border-white/15 hover:bg-white/10"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 pb-4">
        <h2 className="text-3xl font-bold tracking-tight">FAQs</h2>
        <div className="mt-6 grid gap-3">
          {[
            {
              q: "Is GENY JOBDESK live?",
              a: "We&apos;re rolling out access in stages. Join the waitlist and we&apos;ll notify you as soon as it&apos;s ready in your region.",
            },
            {
              q: "How is it different from other job portals?",
              a: "We focus on speed, verified profiles, and AI-powered matching to reduce hiring time by eliminating noise and duplicate listings.",
            },
            {
              q: "Do you have a mobile app?",
              a: "Yes, mobile-first web now; native apps are coming soon for iOS and Android.",
            },
          ].map((item) => (
            <details key={item.q} className="group rounded-xl border border-white/10 bg-white/5 p-4 open:bg-white/10">
              <summary className="cursor-pointer list-none font-medium">
                {item.q}
              </summary>
              <p className="mt-2 text-sm text-white/80">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact / Early Access */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-emerald-400/5 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-bold">Get early access</h3>
              <p className="mt-2 text-white/80">
                Share your email and whether you&apos;re a candidate or recruiter. We&apos;ll reach out with a private beta invite.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur placeholder:text-white/50 focus:outline-none"
                />
                <select className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 focus:outline-none">
                  <option>I&apos;m a Candidate</option>
                  <option>I&apos;m a Recruiter</option>
                </select>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-medium text-slate-900 hover:bg-emerald-400">
                  <Mail className="h-4 w-4" /> Join Waitlist
                </button>
              </div>
              <p className="mt-3 text-xs text-white/60">By joining, you agree to our terms & privacy policy.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h4 className="font-semibold">Why join now?</h4>
              <ul className="mt-3 grid gap-2 text-sm text-white/80">
                {[
                  "Priority access to new features",
                  "Influence the roadmap",
                  "Founding-member perks at launch",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 grid gap-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png" // Place your logo file in the public folder
                alt="GENY JOBDESK Logo"
                width={100} // Adjust size as needed
                height={100}
                className="rounded-xl"
                priority
              />
            </div>
            <p className="mt-3 text-sm text-white/70 max-w-sm">
              An app platform connecting job aspirants with prospective recruiters — fast, secure, and mobile-first.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-semibold mb-2">Product</div>
              <ul className="grid gap-2">
                {navItems.slice(0, 4).map((n) => (
                  <li key={n.id}>
                    <button onClick={() => scrollTo(n.id)} className="hover:text-emerald-400/90">
                      {n.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Company</div>
              <ul className="grid gap-2">
                <li>
                  <a href="https://genyjobdesk.com" className="hover:text-emerald-400/90">genyjobdesk.com</a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400/90">Privacy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400/90">Terms</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-white/60">
            <div>© {new Date().getFullYear()} GENY JOBDESK. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
