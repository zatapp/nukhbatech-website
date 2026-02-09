import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Nukhba Tech",
  description:
    "Web design, web hosting, mobile app development, and e-commerce solutions in Dubai, UAE. Professional digital services starting from AED 1,099.",
};

const services = [
  {
    title: "Web Design & Development",
    desc: "We craft stunning, high-performance websites tailored to your brand. Whether you need a corporate site, landing page, or a full web application, we deliver pixel-perfect designs that convert visitors into customers.",
    features: [
      "Custom responsive design for all devices",
      "Modern UI/UX with fast loading speed",
      "WordPress / CMS integration",
      "SEO-optimized structure",
      "Contact forms & lead capture",
      "Multi-language support (English & Arabic)",
      "Free .ae domain + hosting with packages",
    ],
    startingPrice: "1,099",
    color: "blue",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Web Hosting",
    desc: "Fast, secure, and reliable web hosting solutions powered by premium infrastructure. We ensure your website stays online 24/7 with enterprise-grade security, daily backups, and dedicated support.",
    features: [
      "SSD-powered high-speed servers",
      "99.9% uptime guarantee",
      "Free SSL certificate",
      "cPanel access for easy management",
      "Daily & weekly backups",
      "Email hosting included",
      "DDoS protection & firewall",
    ],
    startingPrice: "299",
    pricePeriod: "/year",
    color: "green",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    desc: "We build native and cross-platform mobile applications for iOS and Android that bring your business to your customers' fingertips. From concept to App Store launch, we handle everything.",
    features: [
      "iOS and Android development",
      "Cross-platform (Flutter / React Native)",
      "Custom UI/UX design",
      "Push notifications & analytics",
      "User authentication & profiles",
      "Payment gateway integration",
      "App Store & Play Store submission",
    ],
    startingPrice: "4,999",
    color: "purple",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Solutions",
    desc: "Launch your online store with our complete e-commerce solutions. We build feature-rich online stores with secure payment gateways, inventory management, and everything you need to sell online.",
    features: [
      "Custom online store design",
      "Secure payment gateway integration",
      "Product & inventory management",
      "Order tracking & notifications",
      "Coupon & discount system",
      "Customer reviews & ratings",
      "Multi-currency & multi-language",
    ],
    startingPrice: "2,999",
    color: "orange",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { bg: string; text: string; light: string }> = {
  blue: { bg: "bg-blue-600", text: "text-blue-600", light: "bg-blue-50" },
  green: { bg: "bg-green-600", text: "text-green-600", light: "bg-green-50" },
  purple: { bg: "bg-purple-600", text: "text-purple-600", light: "bg-purple-50" },
  orange: { bg: "bg-orange-600", text: "text-orange-600", light: "bg-orange-50" },
};

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            From web design to mobile apps, hosting to e-commerce — we provide
            complete digital solutions to help your business succeed online.
          </p>
        </div>
      </section>

      {/* Featured Offer Banner */}
      <section className="bg-blue-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-medium text-center sm:text-left">
            Web Design + Free .ae Domain + 1 Year Hosting — Starting at{" "}
            <span className="font-bold text-lg">AED 1,099</span>
          </p>
          <Link
            href="/pricing"
            className="bg-white text-blue-600 px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors shrink-0"
          >
            View Packages
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, i) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className={`${colors.text} mb-4`}>{service.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 ${colors.text} mt-0.5 shrink-0`}
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
                        <span className="text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/pricing"
                    className={`${colors.bg} text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block`}
                  >
                    View Packages
                  </Link>
                </div>
                <div
                  className={`${colors.light} rounded-xl p-10 border border-gray-200 ${
                    i % 2 === 1 ? "lg:[direction:ltr]" : ""
                  }`}
                >
                  <div className={`${colors.text} mb-3`}>{service.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Starting from
                  </p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-sm text-gray-500">AED</span>
                    <span className="text-3xl font-bold text-gray-900">
                      {service.startingPrice}
                    </span>
                    {service.pricePeriod && (
                      <span className="text-sm text-gray-500">
                        {service.pricePeriod}
                      </span>
                    )}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple, transparent process from idea to launch.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We discuss your business goals, target audience, and project requirements.",
              },
              {
                step: "02",
                title: "Design & Plan",
                desc: "We create wireframes and designs for your approval before development begins.",
              },
              {
                step: "03",
                title: "Development",
                desc: "Our team builds your project with regular updates and feedback rounds.",
              },
              {
                step: "04",
                title: "Launch & Support",
                desc: "We deploy your project and provide ongoing support to ensure smooth operation.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl font-bold text-blue-100 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Tell us about your requirements and we&apos;ll craft the perfect
            solution for your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
            >
              View Pricing
            </Link>
            <Link
              href="/contact"
              className="border border-gray-500 text-white px-8 py-3 rounded-lg font-medium hover:border-white transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
