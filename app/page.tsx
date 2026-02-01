import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-medium mb-4">
              Sama Alnukhba Information Technology LLC
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Elevating Brands to the{" "}
              <span className="text-blue-400">Digital Sky</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              We combine limitless vision with grounded, expert execution.
              From bespoke web solutions to cutting-edge mobile apps, we help
              businesses thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="border border-gray-500 text-white px-8 py-3 rounded-lg font-medium hover:border-white transition-colors text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end digital solutions that transform ideas into impactful
              products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Web Development",
                desc: "Bespoke, high-performance websites and web applications built with modern technologies.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: "App Development",
                desc: "Native and cross-platform mobile apps for iOS and Android that engage users and drive growth.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Digital Marketing",
                desc: "Data-driven SEO, social media campaigns, and strategies that increase visibility and ROI.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Asli UAE Product Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-medium mb-2">Our Flagship Product</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Asli UAE
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A next-generation delivery app built for the UAE market. Order
                food, groceries, and medicines from local stores with real-time
                tracking, AI-powered ordering, and secure payments.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Food delivery from restaurants, cafes, and bakeries",
                  "Grocery delivery from local stores",
                  "Medicine delivery from verified pharmacies",
                  "Real-time GPS tracking",
                  "AI-powered chat ordering",
                  "Multiple payment options including COD",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
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
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/products"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
              >
                Learn More About Asli UAE
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
              <div className="text-6xl font-bold mb-4">Asli</div>
              <p className="text-blue-200 text-lg mb-6">
                Delivery in minutes, not hours
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl mb-1">🍔</div>
                  <div className="text-sm text-blue-200">Food</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">🛒</div>
                  <div className="text-sm text-blue-200">Grocery</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">💊</div>
                  <div className="text-sm text-blue-200">Medicine</div>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://play.google.com/store/apps/details?id=com.asli.customer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-block"
                >
                  Download on Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Nukhba Tech
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "Expert Team",
                desc: "Skilled developers, designers, and strategists dedicated to your success.",
              },
              {
                num: "02",
                title: "Modern Stack",
                desc: "We use the latest technologies and frameworks to build future-proof solutions.",
              },
              {
                num: "03",
                title: "Dubai Based",
                desc: "Local presence with global perspective. We understand the UAE market.",
              },
              {
                num: "04",
                title: "End-to-End",
                desc: "From concept to launch and beyond, we handle every stage of your project.",
              },
            ].map((item) => (
              <div key={item.num} className="text-center">
                <div className="text-4xl font-bold text-blue-100 mb-3">
                  {item.num}
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

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how we can help you build something extraordinary.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
