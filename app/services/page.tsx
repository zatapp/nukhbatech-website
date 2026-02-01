import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Nukhba Tech",
  description:
    "Web development, app development, digital marketing, and UI/UX design services from Dubai.",
};

const services = [
  {
    title: "Web Development",
    desc: "We build bespoke, high-performance websites that form the foundation of your digital presence. From corporate sites to complex web applications, our user-centric designs deliver results.",
    features: [
      "Responsive, mobile-first design",
      "E-commerce solutions",
      "Content management systems",
      "Progressive web apps (PWA)",
      "API development and integration",
      "Performance optimization",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "App Development",
    desc: "We create intuitive mobile applications for iOS and Android, designed to engage users and drive business objectives. From concept to deployment and maintenance.",
    features: [
      "Native iOS and Android apps",
      "Cross-platform (Flutter, React Native)",
      "UI/UX design for mobile",
      "App Store optimization",
      "Push notifications and analytics",
      "Ongoing maintenance and support",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven strategies that increase your brand visibility and drive real ROI. We help you reach the right audience at the right time through the right channels.",
    features: [
      "Search engine optimization (SEO)",
      "Social media marketing",
      "Google Ads and PPC campaigns",
      "Content marketing strategy",
      "Email marketing automation",
      "Analytics and performance reporting",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    desc: "User-centered design that makes digital products intuitive, accessible, and visually compelling. We design experiences that convert visitors into customers.",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Interaction design",
      "Usability testing",
      "Design systems",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Comprehensive digital solutions to help your business grow. From
            design to development to marketing, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div>
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
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
              </div>
              <div className="bg-gray-50 rounded-xl p-10 border border-gray-200">
                <div className="text-blue-600 mb-3">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Get a custom quote for your {service.title.toLowerCase()}{" "}
                  project.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Tell us about your requirements and we&apos;ll craft the perfect solution.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
