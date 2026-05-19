import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-card-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <span className="text-sm font-bold text-white">T</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">
              TimmTech
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Services
            </a>
            <a
              href="#work"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href="#contact"
              className="inline-flex h-9 items-center rounded-lg bg-accent px-4 text-sm font-medium text-white transition-colors hover:bg-accent-light cursor-pointer"
            >
              Contact Us
            </a>
          </div>
          {/* Mobile menu button */}
          <a
            href="#contact"
            className="inline-flex h-9 items-center rounded-lg bg-accent px-4 text-sm font-medium text-white md:hidden cursor-pointer"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16">
        {/* Background effects */}
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center px-6 text-center">
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card/50 px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Shipping products since 2024
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building the future of
            <br />
            <span className="gradient-text">mobile experiences</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            We design and engineer polished mobile applications and scalable web
            platforms. From first concept to the App Store, we ship products
            that people actually want to use.
          </p>

          <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-accent px-6 text-base font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25 cursor-pointer"
            >
              Get in Touch
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex h-12 items-center rounded-xl border border-card-border px-6 text-base font-medium text-muted transition-all hover:border-accent/30 hover:text-foreground cursor-pointer"
            >
              See Our Work
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in-up animate-delay-600 absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-card-border p-1">
              <div className="h-2 w-1 animate-bounce rounded-full bg-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative border-t border-card-border">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              End-to-end product engineering
            </h2>
            <p className="mt-4 text-lg text-muted">
              We handle the full stack so you can focus on your business. From
              native mobile apps to cloud infrastructure, we build it right.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Mobile */}
            <div className="card-hover group rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Mobile Apps</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Cross-platform iOS and Android apps built with React Native and
                Expo. One codebase, native performance, shipped to both stores.
              </p>
            </div>

            {/* Web */}
            <div className="card-hover group rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Web Platforms</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Full-stack web applications powered by Next.js, React, and
                Node.js. Server-rendered, SEO-optimized, and built to scale.
              </p>
            </div>

            {/* Cloud */}
            <div className="card-hover group rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Cloud Infrastructure</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Reliable deployments on AWS, Render, and Cloudflare. CI/CD
                pipelines, edge caching, and infrastructure that scales with you.
              </p>
            </div>

            {/* AI */}
            <div className="card-hover group rounded-2xl border border-card-border bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">AI Integration</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Smart features powered by machine learning. Image recognition,
                NLP, and recommendation engines baked into your product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Bar */}
      <section className="border-t border-card-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-muted/70">
            <span>React Native</span>
            <span className="hidden text-card-border sm:inline">|</span>
            <span>Expo</span>
            <span className="hidden text-card-border sm:inline">|</span>
            <span>Next.js</span>
            <span className="hidden text-card-border sm:inline">|</span>
            <span>TypeScript</span>
            <span className="hidden text-card-border sm:inline">|</span>
            <span>Node.js</span>
            <span className="hidden text-card-border sm:inline">|</span>
            <span>PostgreSQL</span>
            <span className="hidden text-card-border sm:inline">|</span>
            <span>AWS</span>
            <span className="hidden text-card-border sm:inline">|</span>
            <span>Cloudflare</span>
            <span className="hidden text-card-border sm:inline">|</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </section>

      {/* Portfolio / Work */}
      <section id="work" className="relative border-t border-card-border">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Products we&apos;ve built
            </h2>
            <p className="mt-4 text-lg text-muted">
              Real applications, real users, shipped to production.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* MyFloralVault */}
            <div className="card-hover gradient-border group overflow-hidden rounded-2xl border border-card-border bg-card/50 backdrop-blur-sm">
              <Image src="/mfv-preview.jpg" alt="MyFloralVault" width={800} height={420} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold">MyFloralVault</h3>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    Live
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  A social platform for plant enthusiasts &mdash; discover,
                  collect, trade, and identify plants. Features community
                  observations, marketplace, AI plant identification, and an
                  herbal Apothecary.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-card px-2 py-1 text-xs text-muted">
                    React Native
                  </span>
                  <span className="rounded-md bg-card px-2 py-1 text-xs text-muted">
                    Next.js
                  </span>
                  <span className="rounded-md bg-card px-2 py-1 text-xs text-muted">
                    Node.js
                  </span>
                  <span className="rounded-md bg-card px-2 py-1 text-xs text-muted">
                    PostgreSQL
                  </span>
                  <span className="rounded-md bg-card px-2 py-1 text-xs text-muted">
                    AI/ML
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    iOS App
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    Android App
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    Web Platform
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <a
                    href="https://myfloralvault.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-card px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:text-foreground cursor-pointer"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Visit Website
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/myfloralvault/id6760265763"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-card px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:text-foreground cursor-pointer"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.timmtechprojects.mfvmobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-card px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:text-foreground cursor-pointer"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.832l2.545 1.463a1 1 0 010 1.738l-2.545 1.462-2.532-2.532 2.532-2.131zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                    Google Play
                  </a>
                </div>
              </div>
            </div>

            {/* PetListings */}
            <div className="card-hover gradient-border group overflow-hidden rounded-2xl border border-card-border bg-card/50 backdrop-blur-sm">
              <Image src="/petlistings-preview.jpg" alt="PetListings" width={800} height={420} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold">PetListings</h3>
                  <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                    Live
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  A marketplace connecting pet breeders with buyers. Browse
                  listings, filter by breed and location, and connect directly
                  with verified breeders.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-card px-2 py-1 text-xs text-muted">
                    Next.js
                  </span>
                  <span className="rounded-md bg-card px-2 py-1 text-xs text-muted">
                    Node.js
                  </span>
                  <span className="rounded-md bg-card px-2 py-1 text-xs text-muted">
                    PostgreSQL
                  </span>
                  <span className="rounded-md bg-card px-2 py-1 text-xs text-muted">
                    Cloudflare
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                    Web Platform
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <a
                    href="https://petlistings.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-card px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:text-foreground cursor-pointer"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Visit Website
                  </a>
                </div>
              </div>
            </div>

            {/* Freedom Stairlifts Operations */}
            <div className="card-hover gradient-border group overflow-hidden rounded-2xl border border-card-border bg-card/50 backdrop-blur-sm">
              <div className="w-full h-48 bg-gradient-to-br from-sky-900 to-blue-800 flex items-center justify-center rounded-t-2xl">
                <span className="text-white text-2xl font-bold">Freedom Stairlifts</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold">Freedom Stairlifts Operations</h3>
                  <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                    In Production
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Internal CRM and service operations platform for a stairlift
                  installation company. Manages scheduling, customer tracking,
                  and field operations.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-card px-2 py-1 text-xs text-muted">
                    Next.js
                  </span>
                  <span className="rounded-md bg-card px-2 py-1 text-xs text-muted">
                    REST APIs
                  </span>
                  <span className="rounded-md bg-card px-2 py-1 text-xs text-muted">
                    Cloudflare Workers
                  </span>
                  <span className="rounded-md bg-card px-2 py-1 text-xs text-muted">
                    Automation
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                    Internal CRM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative border-t border-card-border">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                About TimmTech
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Small team.
                <br />
                Big impact.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                TimmTech was founded by Xavier Timm with a simple idea: build
                products that solve real problems and ship them fast. We&apos;re
                a lean, technical team based in New Jersey that punches well above
                its weight.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We combine deep expertise in mobile and web engineering with a
                product-first mindset. Every project we take on gets the same
                level of craft and attention, whether it&apos;s an MVP or a
                production platform with thousands of users.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold gradient-text">3+</p>
                  <p className="mt-1 text-sm text-muted">Years Shipping</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">3</p>
                  <p className="mt-1 text-sm text-muted">Products Live</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">2</p>
                  <p className="mt-1 text-sm text-muted">App Stores</p>
                </div>
              </div>
            </div>

            {/* Visual element */}
            <div className="relative flex items-center justify-center">
              <div className="glow relative flex h-72 w-72 items-center justify-center rounded-3xl border border-card-border bg-card/50 sm:h-80 sm:w-80">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5" />
                <div className="relative text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10">
                    <svg
                      className="h-10 w-10 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                      />
                    </svg>
                  </div>
                  <p className="mt-4 text-xl font-bold">Craft-Driven</p>
                  <p className="mt-1 text-sm text-muted">
                    Engineering with purpose
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-card-border">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Get in Touch
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something great
            </h2>
            <p className="mt-4 text-lg text-muted">
              Have a project in mind? We&apos;d love to hear about it. Reach out
              and let&apos;s talk about how we can help.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-lg">
            <div className="rounded-2xl border border-card-border bg-card/50 p-8 backdrop-blur-sm">
              <form
                action="mailto:timmtechprojects@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-muted"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-muted"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-accent py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-light cursor-pointer"
                >
                  Send Message
                </button>
              </form>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span>
                  Or email us directly at{" "}
                  <a
                    href="mailto:timmtechprojects@gmail.com"
                    className="text-accent hover:text-accent-light"
                  >
                    timmtechprojects@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-card-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent">
                <span className="text-xs font-bold text-white">T</span>
              </div>
              <span className="text-sm font-semibold">TimmTech</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted">
              <a
                href="/privacy"
                className="transition-colors hover:text-foreground"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="transition-colors hover:text-foreground"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-card-border pt-8 text-center text-sm text-muted/60">
            &copy; {new Date().getFullYear()} TimmTech Inc.. All rights reserved.
            <br />
            <span className="text-xs">
              Based in New Jersey, United States
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
