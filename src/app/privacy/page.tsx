import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — TimmTech",
  description: "TimmTech Inc. privacy policy and data handling practices.",
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted">
          Last updated: January 1, 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              1. Introduction
            </h2>
            <p>
              TimmTech Inc. (&quot;TimmTech,&quot; &quot;we,&quot; &quot;us,&quot;
              or &quot;our&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website
              (timmtech.co) or use our applications and services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              2. Information We Collect
            </h2>
            <p>
              We may collect information that you voluntarily provide to us when
              you contact us through our website, including your name, email
              address, and any message content you submit. We may also
              automatically collect certain technical information such as your
              browser type, operating system, and IP address when you visit our
              website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website, products, and services</li>
              <li>
                Communicate with you about projects, updates, and business
                matters
              </li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              4. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties. We may share information with
              trusted service providers who assist us in operating our website
              and conducting our business, provided those parties agree to keep
              this information confidential.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              5. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your personal
              information. However, no method of transmission over the Internet
              or method of electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              6. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these
              third-party sites. We encourage you to review the privacy policies
              of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              7. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 13.
              We do not knowingly collect personal information from children
              under 13. If we become aware that we have collected personal
              information from a child under 13, we will take steps to delete
              such information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
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
