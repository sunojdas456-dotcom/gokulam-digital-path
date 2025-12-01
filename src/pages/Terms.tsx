import { Layout } from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="py-16 section-teal">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
        </div>
      </section>

      <section className="py-12 section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-muted-foreground">Last updated: December 2024</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              By accessing and using the Gokulam Dharmik Charitable Trust website, you 
              accept and agree to be bound by these Terms and Conditions.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
              2. Donations
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              All donations made through our website are voluntary contributions. 
              Donations are non-refundable except in cases of technical errors. 
              Tax exemption certificates (80G) are provided as per applicable laws.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
              3. User Accounts
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              You are responsible for maintaining the confidentiality of your account 
              credentials. You agree to notify us immediately of any unauthorized use 
              of your account.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
              4. Pilgrimage Bookings
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Pilgrimage tour bookings are subject to availability and our terms of service. 
              We reserve the right to modify or cancel tours due to unforeseen circumstances. 
              Valid identification is required for all pilgrimage participants.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              All content on this website, including text, images, and logos, is the 
              property of Gokulam Dharmik Charitable Trust and is protected by copyright laws.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
              6. Contact
            </h2>
            <p className="text-foreground leading-relaxed">
              For any questions regarding these terms, please contact us at legal@gokulam.org
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
