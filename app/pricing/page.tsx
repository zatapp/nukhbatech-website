import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing & Packages | Nukhba Tech",
  description:
    "Affordable web design, web hosting, mobile app, and e-commerce packages in UAE. Starting from AED 1,099 with free .ae domain and hosting.",
};

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-500 mt-0.5 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const webDesignPackages = [
  {
    name: "Starter",
    price: "1,099",
    period: "",
    badge: "Most Popular",
    highlight: true,
    description: "Perfect for small businesses and startups looking to get online.",
    features: [
      "Up to 5 pages",
      "Free .ae domain (1 year)",
      "Web hosting for 1 year",
      "Responsive mobile-friendly design",
      "Basic SEO setup",
      "Contact form integration",
      "Social media links",
      "SSL certificate",
      "3 rounds of revisions",
      "Delivery in 7-10 business days",
    ],
  },
  {
    name: "Business",
    price: "2,499",
    period: "",
    badge: "",
    highlight: false,
    description: "For growing businesses that need a professional web presence with CMS.",
    features: [
      "Up to 10 pages",
      "Free .ae domain (1 year)",
      "Web hosting for 1 year",
      "Custom responsive design",
      "WordPress / CMS integration",
      "Advanced SEO optimization",
      "Google Analytics setup",
      "Social media integration",
      "Blog / News section",
      "Live chat widget",
      "SSL certificate",
      "5 rounds of revisions",
      "Delivery in 10-15 business days",
    ],
  },
  {
    name: "Premium",
    price: "4,999",
    period: "",
    badge: "Best Value",
    highlight: false,
    description: "Full-featured website for established businesses needing advanced functionality.",
    features: [
      "Up to 20 pages",
      "Free .ae domain (1 year)",
      "Premium web hosting for 1 year",
      "Custom UI/UX design",
      "CMS with admin dashboard",
      "Advanced SEO + Google Ads setup",
      "Google Analytics & Search Console",
      "Multi-language support (EN/AR)",
      "Blog + Portfolio sections",
      "Booking / Appointment system",
      "WhatsApp integration",
      "SSL certificate",
      "Unlimited revisions",
      "Priority support for 1 year",
      "Delivery in 15-20 business days",
    ],
  },
];

const hostingPackages = [
  {
    name: "Basic",
    price: "299",
    period: "/year",
    description: "Ideal for personal websites and blogs.",
    features: [
      "5 GB SSD storage",
      "1 website",
      "Free SSL certificate",
      "10 email accounts",
      "10 GB bandwidth/month",
      "Weekly backups",
      "99.9% uptime guarantee",
    ],
  },
  {
    name: "Business",
    price: "599",
    period: "/year",
    highlight: true,
    badge: "Recommended",
    description: "Perfect for business websites and small e-commerce stores.",
    features: [
      "25 GB SSD storage",
      "5 websites",
      "Free SSL certificate",
      "50 email accounts",
      "Unlimited bandwidth",
      "Daily backups",
      "99.9% uptime guarantee",
      "cPanel access",
      "1-click app installer",
    ],
  },
  {
    name: "Enterprise",
    price: "1,199",
    period: "/year",
    description: "For high-traffic websites and large-scale applications.",
    features: [
      "100 GB SSD storage",
      "Unlimited websites",
      "Free SSL certificate",
      "Unlimited email accounts",
      "Unlimited bandwidth",
      "Real-time backups",
      "99.99% uptime guarantee",
      "cPanel access",
      "Dedicated IP address",
      "Priority 24/7 support",
      "DDoS protection",
    ],
  },
];

const mobileAppPackages = [
  {
    name: "Starter App",
    price: "4,999",
    period: "",
    description: "Single-platform app for MVPs and simple use cases.",
    features: [
      "iOS or Android (single platform)",
      "Up to 5 screens",
      "Basic UI design",
      "Push notifications",
      "Contact / Inquiry form",
      "App Store / Play Store submission",
      "Source code delivery",
      "30 days of bug support",
    ],
  },
  {
    name: "Business App",
    price: "9,999",
    period: "",
    highlight: true,
    badge: "Most Popular",
    description: "Cross-platform app for businesses needing iOS and Android.",
    features: [
      "iOS + Android (Flutter / React Native)",
      "Up to 15 screens",
      "Custom UI/UX design",
      "Push notifications",
      "User authentication (login/signup)",
      "Admin panel / Dashboard",
      "API integration",
      "Analytics integration",
      "App Store + Play Store submission",
      "Source code delivery",
      "90 days of bug support",
    ],
  },
  {
    name: "Enterprise App",
    price: "19,999",
    period: "+",
    description: "Full-scale custom app with advanced features and backend.",
    features: [
      "iOS + Android (Native or Flutter)",
      "Unlimited screens",
      "Premium custom UI/UX",
      "Full backend development",
      "Real-time features (chat, tracking)",
      "Payment gateway integration",
      "Multi-language support",
      "Advanced admin panel",
      "Cloud hosting setup",
      "App Store + Play Store submission",
      "Source code + documentation",
      "6 months of support & maintenance",
    ],
  },
];

const ecommercePackages = [
  {
    name: "Starter Store",
    price: "2,999",
    period: "",
    description: "Get your online store up and running quickly.",
    features: [
      "Up to 50 products",
      "Responsive design",
      "Payment gateway (1 provider)",
      "Order management",
      "Customer accounts",
      "Free .ae domain (1 year)",
      "Web hosting for 1 year",
      "SSL certificate",
      "Basic SEO setup",
      "Delivery in 10-15 days",
    ],
  },
  {
    name: "Business Store",
    price: "5,999",
    period: "",
    highlight: true,
    badge: "Best Seller",
    description: "Full-featured online store for serious businesses.",
    features: [
      "Up to 500 products",
      "Custom responsive design",
      "Multiple payment gateways",
      "Inventory management",
      "Coupon & discount system",
      "Customer reviews & ratings",
      "Shipping rate calculator",
      "Free .ae domain (1 year)",
      "Premium hosting for 1 year",
      "Advanced SEO optimization",
      "WhatsApp order notifications",
      "Delivery in 15-20 days",
    ],
  },
  {
    name: "Enterprise Store",
    price: "11,999",
    period: "+",
    description: "Large-scale e-commerce with multi-vendor capabilities.",
    features: [
      "Unlimited products",
      "Custom UI/UX design",
      "Multi-vendor / Marketplace support",
      "Multiple payment gateways",
      "Advanced inventory management",
      "Multi-language (EN/AR)",
      "Multi-currency support",
      "Advanced analytics dashboard",
      "Loyalty & rewards program",
      "Mobile app add-on available",
      "Free .ae domain (1 year)",
      "Premium hosting for 1 year",
      "1 year of support & maintenance",
    ],
  },
];

function PricingCard({
  pkg,
}: {
  pkg: {
    name: string;
    price: string;
    period?: string;
    badge?: string;
    highlight?: boolean;
    description: string;
    features: string[];
  };
}) {
  return (
    <div
      className={`relative rounded-2xl p-8 border-2 flex flex-col ${
        pkg.highlight
          ? "border-blue-600 shadow-xl shadow-blue-100"
          : "border-gray-200 hover:border-gray-300"
      } transition-all bg-white`}
    >
      {pkg.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
            {pkg.badge}
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{pkg.description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-gray-500">AED</span>
          <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
          {pkg.period && (
            <span className="text-sm text-gray-500">{pkg.period}</span>
          )}
        </div>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-sm text-gray-700">{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`block text-center px-6 py-3 rounded-lg font-medium transition-colors ${
          pkg.highlight
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      {/* Hero with Featured Offer */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-medium mb-4 text-sm uppercase tracking-wider">
            Transparent Pricing, No Hidden Fees
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Packages &amp; Pricing
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-10">
            Choose the perfect plan for your business. All packages include
            dedicated support and quality you can trust.
          </p>

          {/* Featured AED 1,099 Offer */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-10 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <div className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  LIMITED TIME OFFER
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  Complete Website Package
                </h2>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Professional Web Design (5 Pages)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Free .ae Domain for 1 Year</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Web Hosting for 1 Year</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>SSL Certificate Included</span>
                  </li>
                </ul>
              </div>
              <div className="text-center shrink-0">
                <div className="text-sm text-blue-200 mb-1">Starting at</div>
                <div className="flex items-baseline gap-1 justify-center">
                  <span className="text-lg text-blue-200">AED</span>
                  <span className="text-5xl sm:text-6xl font-bold">1,099</span>
                </div>
                <div className="text-sm text-blue-200 mt-1">one-time payment</div>
                <Link
                  href="/contact"
                  className="mt-4 inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  Claim This Offer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design Packages */}
      <section className="py-20 bg-white" id="web-design">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
              Web Design
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Web Design Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beautiful, responsive websites designed to make a lasting impression
              and drive conversions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webDesignPackages.map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Web Hosting Packages */}
      <section className="py-20 bg-gray-50" id="hosting">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
              Web Hosting
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Web Hosting Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fast, secure, and reliable hosting powered by premium
              infrastructure in the UAE region.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPackages.map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Packages */}
      <section className="py-20 bg-white" id="mobile-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
              Mobile App
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mobile App Development Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Custom mobile applications for iOS and Android that bring your
              business to your customers&apos; fingertips.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mobileAppPackages.map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* E-Commerce Packages */}
      <section className="py-20 bg-gray-50" id="ecommerce">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
              E-Commerce
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              E-Commerce Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Launch your online store with a complete e-commerce solution.
              Sell products and accept payments from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecommercePackages.map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Add-On Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance any package with these additional services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Logo Design",
                price: "499",
                desc: "Professional logo with 3 concepts and unlimited revisions.",
              },
              {
                title: "Content Writing",
                price: "299",
                desc: "SEO-optimized content for up to 5 pages in English or Arabic.",
              },
              {
                title: "Social Media Setup",
                price: "399",
                desc: "Complete setup of Facebook, Instagram, and Google Business profiles.",
              },
              {
                title: "Monthly Maintenance",
                price: "199/mo",
                desc: "Ongoing updates, backups, security patches, and minor changes.",
              },
            ].map((addon) => (
              <div
                key={addon.title}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-1">
                  {addon.title}
                </h3>
                <div className="text-blue-600 font-bold text-lg mb-2">
                  AED {addon.price}
                </div>
                <p className="text-sm text-gray-500">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What is included in the AED 1,099 package?",
                a: "The Starter Web Design package includes a professional 5-page responsive website, a free .ae domain name for 1 year, web hosting for 1 year, SSL certificate, basic SEO setup, contact form, and social media links.",
              },
              {
                q: "Can I upgrade my package later?",
                a: "Absolutely! You can upgrade to a higher package at any time. We will adjust the pricing based on the difference between your current and new plan.",
              },
              {
                q: "Do you provide domain and hosting renewal?",
                a: "Yes, after the first year we offer competitive renewal rates for both domain and hosting. We will notify you before expiry to ensure no downtime.",
              },
              {
                q: "How long does it take to build my website?",
                a: "The Starter package takes 7-10 business days, Business takes 10-15 days, and Premium takes 15-20 business days. Mobile apps typically take 4-8 weeks depending on complexity.",
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes, for packages above AED 5,000 we offer flexible payment plans. Typically 50% upfront and 50% upon project completion.",
              },
              {
                q: "Will my website be mobile-friendly?",
                a: "Yes, all our websites are built with responsive design that looks great on desktops, tablets, and mobile devices.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Which Package Is Right for You?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contact us for a free consultation. We&apos;ll recommend the best
            solution for your business needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
            >
              Get Free Consultation
            </Link>
            <a
              href="https://wa.me/97142800149"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-500 text-white px-8 py-3 rounded-lg font-medium hover:border-white transition-colors inline-block"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
