import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — TimmTech",
  description: "TimmTech Inc. terms of service and usage agreement.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="border-b border-card-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <span className="text-sm font-bold text-white">T</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">
              TimmTech
            </span>
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted">
          Last updated: January 1, 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the TimmTech website (timmtech.co) and any
              services provided by TimmTech Inc. (&quot;TimmTech,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to
              be bound by these Terms of Service. If you do not agree to these
              terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              2. Services
            </h2>
            <p>
              TimmTech provides software development services including mobile
              application development, web platform engineering, cloud
              infrastructure management, and AI integration services. The
              specific scope, deliverables, and terms of any project engagement
              will be defined in a separate agreement between TimmTech and the
              client.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              3. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos, and
              software, is the property of TimmTech Inc. and is protected by
              applicable intellectual property laws. You may not reproduce,
              distribute, or create derivative works from this content without
              our express written permission.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              4. User Conduct
            </h2>
            <p>
              You agree not to use our website or services for any unlawful
              purpose or in any way that could damage, disable, or impair our
              website or interfere with any other party&apos;s use of our
              website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              5. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, TimmTech Inc.
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or
              revenues, whether incurred directly or indirectly, or any loss of
              data, use, goodwill, or other intangible losses resulting from
              your access to or use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              6. Disclaimer of Warranties
            </h2>
            <p>
              Our website and services are provided on an &quot;as is&quot; and
              &quot;as available&quot; basis. TimmTech Inc. makes no
              representations or warranties of any kind, express or implied,
              regarding the operation of our website or the information,
              content, or materials included therein.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              7. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the State of New Jersey, United
              States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              8. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              We will notify users of any material changes by posting the
              updated terms on this page. Your continued use of our website
              after such modifications constitutes your acknowledgment and
              acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a
                href="mailto:contact@timmtech.co"
                className="text-accent hover:text-accent-light"
              >
                contact@timmtech.co
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-card-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-muted/60">
          &copy; {new Date().getFullYear()} TimmTech Inc.. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
