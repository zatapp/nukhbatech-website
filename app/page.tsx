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

            {/* AED 1,099 Offer */}
            <Link
              href="/pricing#web-design"
              className="inline-block mb-8 group"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 border border-blue-400/30 rounded-2xl px-6 py-5 sm:px-8 sm:py-6 hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg hover:shadow-blue-500/25">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div>
                    <div className="bg-yellow-400 text-gray-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full inline-block mb-2 uppercase tracking-wider">
                      Special Offer
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-white/70 text-lg">AED</span>
                      <span className="text-5xl sm:text-6xl font-extrabold text-white">1,099</span>
                    </div>
                    <p className="text-white text-lg font-semibold mt-1">
                      for your website<span className="text-yellow-400">*</span>
                    </p>
                    <p className="text-blue-200 text-sm mt-1">
                      Web Design + Free .ae Domain + 1 Year Hosting + SSL
                    </p>
                  </div>
                  <div className="sm:ml-auto shrink-0">
                    <span className="bg-white text-blue-700 px-5 py-2.5 rounded-lg font-bold text-sm group-hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                      View Details
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-2">
                *5-page responsive website with domain, hosting &amp; SSL for 1 year. <span className="underline">Terms apply.</span>
              </p>
            </Link>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border border-gray-500 text-white px-8 py-3 rounded-lg font-medium hover:border-white transition-colors text-center"
              >
                View All Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Ticker */}
      <section className="bg-gray-900 border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Web Design
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Web Hosting
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              Mobile Apps
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full" />
              E-Commerce
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full" />
              Digital Marketing
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full" />
              UI/UX Design
            </span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete digital solutions to take your business online and make
              it thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Web Design",
                desc: "Stunning, responsive websites that capture your brand and convert visitors.",
                price: "From AED 1,099",
                color: "blue",
                href: "/pricing#web-design",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                ),
                title: "Web Hosting",
                desc: "Fast, secure hosting with 99.9% uptime, SSL, and email accounts included.",
                price: "From AED 299/yr",
                color: "green",
                href: "/pricing#hosting",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Mobile Apps",
                desc: "iOS & Android apps built with Flutter and React Native for your business.",
                price: "From AED 4,999",
                color: "purple",
                href: "/pricing#mobile-app",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                ),
                title: "E-Commerce",
                desc: "Full-featured online stores with payment gateways and inventory management.",
                price: "From AED 2,999",
                color: "orange",
                href: "/pricing#ecommerce",
              },
            ].map((service) => {
              const colorClasses: Record<string, string> = {
                blue: "text-blue-600 bg-blue-50",
                green: "text-green-600 bg-green-50",
                purple: "text-purple-600 bg-purple-50",
                orange: "text-orange-600 bg-orange-50",
              };
              const [textColor, bgColor] = colorClasses[service.color].split(" ");
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow group"
                >
                  <div className={`w-14 h-14 ${bgColor} ${textColor} rounded-lg flex items-center justify-center mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                  <p className={`${textColor} font-bold text-sm`}>
                    {service.price}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/pricing"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              View all packages &amp; pricing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Starter Package Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
                Most Popular Package
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get Your Business Online for AED 1,099
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Everything you need to launch your professional website.
                Perfect for small businesses, startups, and freelancers in the
                UAE.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Professional 5-page responsive website",
                  "Free .ae domain name for 1 year",
                  "Web hosting for 1 full year",
                  "SSL certificate for security",
                  "Basic SEO setup for Google visibility",
                  "Contact form & social media integration",
                  "Mobile-friendly responsive design",
                  "Delivery in 7-10 business days",
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/pricing"
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors text-center"
                >
                  See All Packages
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-10 text-white text-center">
              <div className="text-sm text-blue-200 uppercase tracking-wider mb-2">
                Starter Package
              </div>
              <div className="flex items-baseline gap-2 justify-center mb-2">
                <span className="text-2xl text-blue-200">AED</span>
                <span className="text-7xl font-bold">1,099</span>
              </div>
              <p className="text-blue-200 mb-6">one-time payment</p>
              <div className="border-t border-blue-500 pt-6 space-y-4 text-left max-w-xs mx-auto">
                {[
                  { label: "Web Design", detail: "5 Pages" },
                  { label: ".ae Domain", detail: "Free for 1 Year" },
                  { label: "Web Hosting", detail: "Free for 1 Year" },
                  { label: "SSL Certificate", detail: "Included" },
                  { label: "SEO Setup", detail: "Basic" },
                  { label: "Delivery", detail: "7-10 Days" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-blue-100">{item.label}</span>
                    <span className="font-medium">{item.detail}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-block"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Asli UAE Product Highlight */}
      <section className="py-20 bg-white">
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
                  <div className="text-3xl mb-1">&#x1F354;</div>
                  <div className="text-sm text-blue-200">Food</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">&#x1F6D2;</div>
                  <div className="text-sm text-blue-200">Grocery</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">&#x1F48A;</div>
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
      <section className="py-20 bg-gray-50">
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
                title: "Affordable Pricing",
                desc: "Transparent packages starting from AED 1,099 with no hidden fees.",
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
            >
              View Packages
            </Link>
            <Link
              href="/contact"
              className="border border-gray-500 text-white px-8 py-3 rounded-lg font-medium hover:border-white transition-colors inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
