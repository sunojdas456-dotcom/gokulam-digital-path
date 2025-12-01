import { Layout } from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-16 section-teal">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-12 section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-muted-foreground">Last updated: December 2024</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you make a 
              donation, create an account, subscribe to our newsletter, or contact us. 
              This may include your name, email address, phone number, address, and payment information.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-2 mb-4">
              <li>Process your donations and provide receipts</li>
              <li>Send you updates about our activities and events</li>
              <li>Respond to your inquiries and requests</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information with service providers who assist us in operating 
              our website and conducting our operations.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
              5. Contact Us
            </h2>
            <p className="text-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at 
              privacy@gokulam.org
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
